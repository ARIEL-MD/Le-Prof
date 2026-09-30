import React, { useEffect, useImperativeHandle, useRef, forwardRef } from 'react';
import 'mathlive';
import type { MathfieldElement } from 'mathlive';

/**
 * Éditeur riche pour les énoncés : texte français + vraies formules MathLive.
 *
 * Principe important : le DOM éditable est la source visuelle pendant l'édition.
 * On ne reconstruit JAMAIS le contenu à chaque frappe. Les math-field sont des
 * îlots MathLive autonomes : ils restent beaux et éditables, même si l'utilisateur
 * modifie ou supprime une formule.
 */
export interface RichScientificInputRef {
  insertText: (text: string) => void;
  insert?: (latex: string) => void;
  clear: () => void;
  focus: () => void;
  backspace?: () => void;
  moveLeft?: () => void;
  moveRight?: () => void;
  setValue?: (val: string) => void;
}

interface RichScientificInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onEnter?: () => void;
  className?: string;
  minHeight?: string;
  autoFocus?: boolean;
}

/** Nettoyage non destructif : surtout ne jamais transformer \frac en texte brut. */
export function cleanNaturalScientificText(input: string): string {
  if (!input) return '';
  return input
    .normalize('NFC')
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, ' ')
    .replace(/\\cfrac\{/g, '\\frac{')
    .replace(/\\dfrac\{/g, '\\frac{')
    .replace(/\\tfrac\{/g, '\\frac{')
    // Les réponses OCR/JSON peuvent contenir deux antislashs devant les délimiteurs.
    .replace(/\\\\(?=\(|\)|\[|\]|\$)/g, '\\');
}

/**
 * Détecte si une chaîne est une consigne ou phrase en langage naturel français,
 * plutôt qu'une formule mathématique/scientifique pure.
 */
export function isNaturalFrenchSentence(text: string): boolean {
  if (!text) return false;
  const trimmed = text.trim();
  const frenchKeywords = /\b(?:soit|considère|considérons|déterminer|calcule|calculer|montrer|démontrer|justifier|résoudre|simplifier|tracer|étudier|dresser|tableau|variation|dérivée|fonction|suite|repère|plan|droite|courbe|triangle|cercle|vecteur|point|points|devoir|exercice|question|partie|problème|on\s+donne|sachant\s+que|pour\s+tout|pour\s+chaque|avec|dans|sur|par|est|sont|alors|donc)\b/i;
  const words = trimmed.match(/[a-zA-ZÀ-ÿ]{3,}/g) || [];
  if (frenchKeywords.test(trimmed)) return true;
  if (words.length >= 4 && !/^\\[a-zA-Z]+/.test(trimmed)) return true;
  return false;
}

/**
 * Détermine si un texte donné est une expression scientifique ou formule LaTeX structurée
 * nécessitant un îlot MathLive (ex: fractions, racines, limites, intégrales, vecteurs).
 * Les symboles simples (comme +∞, Ω, °, ⇄, α, π, ×) restent du texte naturel fluide.
 */
export function isMathExpression(text: string): boolean {
  if (!text || !text.trim()) return false;
  const trimmed = text.trim();
  // Formats LaTeX délimités
  if (/^\\\(.*\\\)$|^\\\[.*\\\]$|^\$\$.*\$\$$|^\$.*\$$/.test(trimmed)) return true;
  // Commandes LaTeX complexes ou de mise en forme 2D (fractions, racines, limites, intégrales, sommes...)
  if (/\\(frac|sqrt|lim|int|sum|prod|vec|overrightarrow|mathbb|binom|partial)\b/.test(trimmed)) return true;
  if (/^\\frac\{/.test(trimmed)) return true;
  if (/^\\sqrt\{/.test(trimmed)) return true;
  if (/^\\lim_/.test(trimmed)) return true;
  if (/^\\int_/.test(trimmed)) return true;
  if (/^\\sum_/.test(trimmed)) return true;
  if (/^\\vec\{/.test(trimmed)) return true;
  return false;
}

/**
 * Encadre une formule mathématique en \( ... \) pour garantir qu'elle soit
 * instanciée comme îlot MathLive interactif.
 */
export function wrapInlineMath(latex: string): string {
  const trimmed = latex.trim();
  if (!trimmed) return '';
  if (trimmed.startsWith('\\(') && trimmed.endsWith('\\)')) return trimmed;
  if (trimmed.startsWith('\\[') && trimmed.endsWith('\\]')) return trimmed;
  if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) return trimmed;
  if (trimmed.startsWith('$') && trimmed.endsWith('$')) return trimmed;
  return `\\(${trimmed}\\)`;
}

/**
 * Extrait le contenu LaTeX brut sans délimiteurs extérieurs
 */
export function extractMathContent(text: string): string {
  const clean = cleanNaturalScientificText(text).trim();
  if (clean.startsWith('\\(') && clean.endsWith('\\)')) return clean.slice(2, -2).trim();
  if (clean.startsWith('\\[') && clean.endsWith('\\]')) return clean.slice(2, -2).trim();
  if (clean.startsWith('$$') && clean.endsWith('$$')) return clean.slice(2, -2).trim();
  if (clean.startsWith('$') && clean.endsWith('$')) return clean.slice(1, -1).trim();
  return clean;
}

type Segment = { type: 'text' | 'math'; content: string; display?: boolean };

function findBalanced(text: string, openIndex: number, open = '{', close = '}'): number {
  let depth = 0;
  for (let i = openIndex; i < text.length; i++) {
    if (text[i] === open) depth++;
    else if (text[i] === close) {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function normalizeMathDelimiters(value: string): string {
  return cleanNaturalScientificText(value)
    .replace(/\$\$([\s\S]*?)\$\$/g, '\\[$1\\]')
    .replace(/(^|[^\\])\$([^$\n]+)\$/g, '$1\\($2\\)');
}

/**
 * Découpe un énoncé en texte et îlots mathématiques.
 * Reconnaît $$...$$, \[...\], \(...\), $...$ et TOUTES les formes LaTeX nues
 * (limites, fractions, racines, intégrales, sommes, vecteurs, puissances, ensembles, etc.)
 */
function splitScientificText(value: string): Segment[] {
  const source = normalizeMathDelimiters(value);
  if (!source) return [];

  const out: Segment[] = [];
  let textStart = 0;
  let i = 0;

  const flushText = (end: number) => {
    if (end > textStart) out.push({ type: 'text', content: source.slice(textStart, end) });
  };

  const addMath = (start: number, end: number, latex: string, display = false) => {
    flushText(start);
    if (latex.trim()) out.push({ type: 'math', content: extractMathContent(latex.trim()), display });
    textStart = end;
    i = end;
  };

  while (i < source.length) {
    // \[ ... \] : formule bloc
    if (source.startsWith('\\[', i)) {
      const end = source.indexOf('\\]', i + 2);
      if (end !== -1) {
        addMath(i, end + 2, source.slice(i + 2, end), true);
        continue;
      }
    }

    // \( ... \) : formule inline
    if (source.startsWith('\\(', i)) {
      const end = source.indexOf('\\)', i + 2);
      if (end !== -1) {
        addMath(i, end + 2, source.slice(i + 2, end), false);
        continue;
      }
    }

    // \frac{num}{den} sans délimiteur
    if (source.startsWith('\\frac{', i)) {
      const nEnd = findBalanced(source, i + 5);
      if (nEnd !== -1 && source[nEnd + 1] === '{') {
        const dEnd = findBalanced(source, nEnd + 1);
        if (dEnd !== -1) {
          addMath(i, dEnd + 1, source.slice(i, dEnd + 1), false);
          continue;
        }
      }
    }

    // \sqrt{...} ou \sqrt[...]...
    if (source.startsWith('\\sqrt', i)) {
      let curr = i + 5;
      if (source[curr] === '[') {
        const brEnd = source.indexOf(']', curr);
        if (brEnd !== -1) curr = brEnd + 1;
      }
      if (source[curr] === '{') {
        const end = findBalanced(source, curr);
        if (end !== -1) {
          addMath(i, end + 1, source.slice(i, end + 1), false);
          continue;
        }
      }
    }

    // Limite LaTeX nue : \lim_{x\to0^+} f(x)
    if (source.startsWith('\\lim', i) || source.startsWith('lim_', i)) {
      const match = source.slice(i).match(/^\\?lim_\{([^{}]+)\}\s*([^\n.;,!?]+?)(?=(?:\s{2,}|\s+(?:et|pour|avec|si|dans|ou|sur|par)\b|[\n]|$))/i);
      if (match) {
        addMath(i, i + match[0].length, match[0], false);
        continue;
      }
    }

    // Intégrale nue : \int ...
    if (source.startsWith('\\int', i)) {
      const match = source.slice(i).match(/^\\int(?:_\{[^{}]+\}|_[0-9a-zA-Z])?(?:\^\{[^{}]+\}|\^[0-9a-zA-Z])?\s*([^\n.;,!?]+?)(?=(?:\s{2,}|\s+(?:et|pour|avec|si|dans|ou|sur|par)\b|[\n]|$))/i);
      if (match) {
        addMath(i, i + match[0].length, match[0], false);
        continue;
      }
    }

    // Somme nue : \sum ...
    if (source.startsWith('\\sum', i)) {
      const match = source.slice(i).match(/^\\sum(?:_\{[^{}]+\}|_[0-9a-zA-Z])?(?:\^\{[^{}]+\}|\^[0-9a-zA-Z])?\s*([^\n.;,!?]+?)(?=(?:\s{2,}|\s+(?:et|pour|avec|si|dans|ou|sur|par)\b|[\n]|$))/i);
      if (match) {
        addMath(i, i + match[0].length, match[0], false);
        continue;
      }
    }

    // Vecteur nu : \vec{...} ou \overrightarrow{...}
    if (source.startsWith('\\vec{', i) || source.startsWith('\\overrightarrow{', i)) {
      const openIdx = source.indexOf('{', i);
      const end = findBalanced(source, openIdx);
      if (end !== -1) {
        addMath(i, end + 1, source.slice(i, end + 1), false);
        continue;
      }
    }

    // Ensembles usuels : \mathbb{R}, \mathbb{C}, \mathbb{N}, \mathbb{Z}
    if (source.startsWith('\\mathbb{', i)) {
      const end = findBalanced(source, i + 7);
      if (end !== -1) {
        let fullEnd = end + 1;
        if (source.slice(fullEnd, fullEnd + 4).startsWith('_+^*')) fullEnd += 4;
        else if (source.slice(fullEnd, fullEnd + 2).startsWith('^*')) fullEnd += 2;
        else if (source.slice(fullEnd, fullEnd + 2).startsWith('_+')) fullEnd += 2;
        addMath(i, fullEnd, source.slice(i, fullEnd), false);
        continue;
      }
    }

    // Intervalles scientifiques : ]0; +\infty[, [a; b], etc.
    if (source[i] === '[' || source[i] === ']') {
      const sub = source.slice(i);
      const match = sub.match(/^[\[\]]\s*([^\n;\[\]]+?)\s*;\s*([^\n;\[\]]+?)\s*[\[\]]/);
      if (match && (match[0].includes('\\') || match[0].includes('∞') || match[0].includes('0') || match[0].includes('+') || match[0].includes('-'))) {
        addMath(i, i + match[0].length, match[0], false);
        continue;
      }
    }

    // Toute autre commande LaTeX nue : \alpha, \beta, \Delta, \pm, \times, \div, \ln, etc.
    if (source[i] === '\\') {
      const match = source.slice(i).match(/^\\([a-zA-Z]+)(?:_\{[^{}]+\}|_[0-9a-zA-Z])?(?:\^\{[^{}]+\}|\^[0-9a-zA-Z])?(?:\{[^{}]*\})?/);
      if (match) {
        addMath(i, i + match[0].length, match[0], false);
        continue;
      }
    }

    // Exposants et indices isolés : x^2, x^3, u_n, u_{n+1}, e^x
    if (/[a-zA-Z]/.test(source[i])) {
      const sub = source.slice(i);
      const match = sub.match(/^[a-zA-Z](?:\^\{[^{}]+\}|\^[0-9a-zA-Z\+\-]+|\_\{[^{}]+\}|\_[0-9a-zA-Z\+\-]+)+/);
      if (match) {
        addMath(i, i + match[0].length, match[0], false);
        continue;
      }
    }

    i++;
  }

  flushText(source.length);

  // Fusion des textes adjacents.
  const merged: Segment[] = [];
  for (const seg of out) {
    const prev = merged[merged.length - 1];
    if (prev?.type === 'text' && seg.type === 'text') prev.content += seg.content;
    else merged.push(seg);
  }
  return merged;
}

function createMathField(latex: string, display = false): MathfieldElement {
  const mf = document.createElement('math-field') as MathfieldElement;
  mf.value = latex;
  mf.setAttribute('data-rich-math', 'true');
  mf.setAttribute('aria-label', 'Formule mathématique modifiable');
  mf.smartMode = true;
  mf.smartFence = true;
  mf.smartSuperscript = true;
  mf.mathVirtualKeyboardPolicy = 'manual';
  mf.tabIndex = 0;
  mf.readOnly = false;
  // Ne jamais forcer contenteditable="false" pour permettre l'édition et le positionnement du curseur
  mf.style.display = display ? 'block' : 'inline-block';
  mf.style.verticalAlign = 'middle';
  mf.style.minWidth = '1.4em';
  mf.style.maxWidth = '100%';
  mf.style.background = 'rgba(99, 102, 241, 0.05)';
  mf.style.border = '1px solid rgba(99, 102, 241, 0.25)';
  mf.style.borderRadius = '6px';
  mf.style.outline = 'none';
  mf.style.padding = display ? '4px 8px' : '1px 5px';
  mf.style.margin = display ? '4px 0' : '0 2px';
  mf.style.fontSize = '1.05em';
  mf.style.lineHeight = '1.35';
  mf.style.cursor = 'text';
  mf.style.color = 'inherit';
  mf.style.transition = 'all 0.15s ease';

  // Synchronisation immédiate quand l'élève modifie les chiffres ou les variables
  mf.addEventListener('input', () => {
    const root = mf.closest('[contenteditable="true"]') as HTMLElement | null;
    if (root) {
      const next = serializeEditor(root);
      const ev = new CustomEvent('math-field-change', { bubbles: true, detail: next });
      root.dispatchEvent(ev);
    }
  });

  // Navigation fluide au clavier pour entrer et sortir de la formule avec les flèches
  mf.addEventListener('move-out', (e: any) => {
    const root = mf.closest('[contenteditable="true"]') as HTMLElement | null;
    if (!root) return;
    const direction = e.detail?.direction;
    const sel = window.getSelection();
    if (!sel) return;
    const range = document.createRange();
    if (direction === 'forward') {
      if (mf.nextSibling) {
        range.setStart(mf.nextSibling, 0);
      } else {
        const space = document.createTextNode(' ');
        root.appendChild(space);
        range.setStart(space, 1);
      }
    } else if (direction === 'backward') {
      if (mf.previousSibling) {
        const len = mf.previousSibling.textContent?.length || 0;
        range.setStart(mf.previousSibling, len);
      } else {
        const space = document.createTextNode(' ');
        root.insertBefore(space, mf);
        range.setStart(space, 0);
      }
    }
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    root.focus();
  });

  return mf;
}

function serializeEditor(root: HTMLElement): string {
  let result = '';

  const walk = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      result += node.textContent || '';
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const el = node as HTMLElement;
    if (el.tagName === 'MATH-FIELD') {
      const mf = el as MathfieldElement;
      result += `\\(${mf.value}\\)`;
      return;
    }
    if (el.tagName === 'BR') {
      result += '\n';
      return;
    }

    el.childNodes.forEach(walk);
  };

  root.childNodes.forEach(walk);
  // Conserver les espaces normaux sans les supprimer
  return result.replace(/\u00a0/g, ' ');
}

function appendTextWithNewlines(root: HTMLElement, text: string) {
  const lines = text.split('\n');
  lines.forEach((line, index) => {
    if (line) root.appendChild(document.createTextNode(line));
    if (index < lines.length - 1) root.appendChild(document.createElement('br'));
  });
}

function restoreEditor(root: HTMLElement, value: string, focusEnd = false) {
  root.innerHTML = '';
  const segments = splitScientificText(value);

  if (!segments.length) return;

  for (const seg of segments) {
    if (seg.type === 'text') {
      appendTextWithNewlines(root, seg.content);
    } else {
      const mf = createMathField(seg.content, !!seg.display);
      root.appendChild(mf);
    }
  }

  // S'assurer qu'un nœud de texte existe au début et à la fin pour permettre
  // à l'utilisateur de cliquer et d'éditer facilement tout autour des formules
  if (root.firstChild && root.firstChild.nodeType !== Node.TEXT_NODE) {
    root.insertBefore(document.createTextNode(''), root.firstChild);
  }
  if (root.lastChild && root.lastChild.nodeType !== Node.TEXT_NODE) {
    root.appendChild(document.createTextNode(' '));
  }

  if (focusEnd) {
    requestAnimationFrame(() => {
      placeCaretAtEnd(root);
    });
  }
}

function placeCaretAtEnd(root: HTMLElement) {
  const range = document.createRange();
  range.selectNodeContents(root);
  range.collapse(false);
  const sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
}

export const RichScientificInput = forwardRef<RichScientificInputRef, RichScientificInputProps>(
  ({ value, onChange, placeholder = 'Posez une question, écrivez ou collez votre devoir...', onKeyDown, onEnter, className = '', minHeight = '56px', autoFocus = false }, ref) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const lastValue = useRef(value);
    const composing = useRef(false);

    // Construction initiale uniquement. Pendant la frappe, React ne reconstruit jamais le DOM.
    useEffect(() => {
      const root = rootRef.current;
      if (!root) return;
      restoreEditor(root, value);
      lastValue.current = value;
      if (autoFocus) requestAnimationFrame(() => root.focus());
    }, []);

    // Une nouvelle valeur venant de l'extérieur (OCR, calculatrice, reset) reconstruit l'éditeur.
    useEffect(() => {
      const root = rootRef.current;
      if (!root || value === lastValue.current) return;
      // Le parent peut changer la valeur après OCR ou insertion externe.
      restoreEditor(root, value);
      lastValue.current = value;
    }, [value]);

    useEffect(() => {
      const root = rootRef.current;
      if (!root) return;

      const emit = () => {
        if (composing.current) return;
        const next = serializeEditor(root);
        lastValue.current = next;
        onChange(next);
      };

      const onCompositionStart = () => { composing.current = true; };
      const onCompositionEnd = () => { composing.current = false; emit(); };

      root.addEventListener('input', emit);
      root.addEventListener('change', emit);
      root.addEventListener('compositionstart', onCompositionStart);
      root.addEventListener('compositionend', onCompositionEnd);
      root.addEventListener('math-field-change', emit);
      return () => {
        root.removeEventListener('input', emit);
        root.removeEventListener('change', emit);
        root.removeEventListener('compositionstart', onCompositionStart);
        root.removeEventListener('compositionend', onCompositionEnd);
        root.removeEventListener('math-field-change', emit);
      };
    }, [onChange]);

    useImperativeHandle(ref, () => ({
      insertText: (text: string) => {
        const root = rootRef.current;
        if (!root) return;
        root.focus();

        // Si l'élément inséré est une formule mathématique structurée (ex: fraction, racine, limite, intégrale)
        // on l'instancie en îlot MathLive interactif avec un espace textuel après pour continuer la frappe
        if (isMathExpression(text)) {
          const mathContent = extractMathContent(text);
          const mf = createMathField(mathContent);
          const trailingSpace = document.createTextNode(' ');

          const sel = window.getSelection();
          if (sel?.rangeCount && root.contains(sel.anchorNode)) {
            const range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(trailingSpace);
            range.insertNode(mf);

            const newRange = document.createRange();
            newRange.setStart(trailingSpace, 1);
            newRange.collapse(true);
            sel.removeAllRanges();
            sel.addRange(newRange);
          } else {
            root.appendChild(mf);
            root.appendChild(trailingSpace);
            placeCaretAtEnd(root);
          }
        } else {
          // Insertion de texte ou symbole unicode simple
          document.execCommand('insertText', false, text);
        }

        const next = serializeEditor(root);
        lastValue.current = next;
        onChange(next);
      },
      insert: (latex: string) => {
        const root = rootRef.current;
        if (!root) return;
        root.focus();
        const mathContent = extractMathContent(latex);
        const mf = createMathField(mathContent);
        const trailingSpace = document.createTextNode(' ');

        const sel = window.getSelection();
        if (sel?.rangeCount && root.contains(sel.anchorNode)) {
          const range = sel.getRangeAt(0);
          range.deleteContents();
          range.insertNode(trailingSpace);
          range.insertNode(mf);

          const newRange = document.createRange();
          newRange.setStart(trailingSpace, 1);
          newRange.collapse(true);
          sel.removeAllRanges();
          sel.addRange(newRange);
        } else {
          root.appendChild(mf);
          root.appendChild(trailingSpace);
          placeCaretAtEnd(root);
        }
        const next = serializeEditor(root);
        lastValue.current = next;
        onChange(next);
      },
      clear: () => {
        if (!rootRef.current) return;
        rootRef.current.innerHTML = '';
        lastValue.current = '';
        onChange('');
      },
      focus: () => rootRef.current?.focus(),
      backspace: () => {
        document.execCommand('delete');
        if (rootRef.current) onChange(serializeEditor(rootRef.current));
      },
      moveLeft: () => document.execCommand('moveBackward'),
      moveRight: () => document.execCommand('moveForward'),
      setValue: (val: string) => {
        if (rootRef.current) restoreEditor(rootRef.current, val);
        lastValue.current = val;
        onChange(val);
      },
    }));

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' && !e.shiftKey && onEnter) {
        e.preventDefault();
        onEnter();
        return;
      }
      onKeyDown?.(e);
    };

    const empty = !value;

    return (
      <div className={`relative w-full flex-1 overflow-auto ${className}`}>
        {empty && (
          <div className="absolute left-1 top-1 pointer-events-none text-slate-400 dark:text-slate-500 text-sm md:text-base leading-relaxed">
            {placeholder}
          </div>
        )}
        <div
          ref={rootRef}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-multiline="true"
          spellCheck
          onKeyDown={handleKeyDown}
          onPaste={(e) => {
            const text = e.clipboardData.getData('text/plain');
            if (!text) return;
            // Coller un énoncé passe par le parseur pour transformer les maths et symboles en vrais îlots math-field.
            if (isMathExpression(text)) {
              e.preventDefault();
              const root = rootRef.current;
              if (!root) return;
              const clean = cleanNaturalScientificText(text);
              const segments = splitScientificText(clean);
              const sel = window.getSelection();
              if (!sel?.rangeCount || !root.contains(sel.anchorNode)) return;
              const range = sel.getRangeAt(0);
              range.deleteContents();
              const frag = document.createDocumentFragment();
              for (const seg of segments) {
                if (seg.type === 'text') {
                  const temp = document.createElement('span');
                  temp.textContent = seg.content;
                  frag.appendChild(temp);
                } else {
                  frag.appendChild(createMathField(seg.content, !!seg.display));
                }
              }
              range.insertNode(frag);
              placeCaretAtEnd(root);
              const next = serializeEditor(root);
              lastValue.current = next;
              onChange(next);
            }
          }}
          className="w-full outline-none whitespace-pre-wrap break-words text-slate-900 dark:text-slate-100 text-sm md:text-base leading-relaxed font-sans px-1 py-1"
          style={{ minHeight }}
        />
      </div>
    );
  }
);

RichScientificInput.displayName = 'RichScientificInput';
export default RichScientificInput;
