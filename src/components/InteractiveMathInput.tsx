import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import 'mathlive';
import type { MathfieldElement } from 'mathlive';

export interface InteractiveMathInputRef {
  insert: (latex: string) => void;
  insertText: (latex: string) => void;
  setValue: (latex: string) => void;
  focus: () => void;
  clear: () => void;
  backspace: () => void;
  moveLeft: () => void;
  moveRight: () => void;
  executeCommand: (command: string | [string, ...any[]]) => void;
}

interface InteractiveMathInputProps {
  value: string;
  onChange: (val: string) => void;
  className?: string;
  placeholder?: string;
  onEnter?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<any>) => void;
  autoFocus?: boolean;
  minHeight?: string;
  fontSize?: string;
}

export const InteractiveMathInput = forwardRef<InteractiveMathInputRef, InteractiveMathInputProps>(
  (
    {
      value,
      onChange,
      className = '',
      placeholder = 'Cliquez ici pour taper ou modifier votre formule...',
      onEnter,
      onKeyDown,
      autoFocus = false,
      minHeight = '48px',
      fontSize = '1.25rem',
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mfRef = useRef<MathfieldElement | null>(null);
    const isInternalUpdate = useRef(false);

    useEffect(() => {
      if (!containerRef.current) return;

      // Création robuste et conforme de l'élément math-field DOM
      const mf = document.createElement('math-field') as MathfieldElement;
      mf.mathVirtualKeyboardPolicy = 'manual';
      mf.smartFence = true;
      mf.smartSuperscript = true;
      mf.smartMode = true;
      mf.readOnly = false;
      mf.tabIndex = 0;
      mf.value = value || '';

      if (placeholder) {
        mf.setAttribute('placeholder', placeholder);
      }

      // Styling complet pour un rendu visuel fluide et un curseur visible
      mf.style.width = '100%';
      mf.style.background = 'transparent';
      mf.style.fontSize = fontSize;
      mf.style.outline = 'none';
      mf.style.border = 'none';
      mf.style.color = 'inherit';
      mf.style.minHeight = minHeight;
      mf.style.display = 'flex';
      mf.style.alignItems = 'center';
      mf.style.cursor = 'text';

      const handleInput = () => {
        isInternalUpdate.current = true;
        onChange(mf.value);
      };

      const handleChange = () => {
        isInternalUpdate.current = true;
        onChange(mf.value);
      };

      const handleKeyDownEvent = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          if (onEnter) {
            e.preventDefault();
            onEnter();
          }
        }
        if (onKeyDown) {
          // Wrap into synthetic or pass
          (onKeyDown as any)(e);
        }
      };

      const handlePasteEvent = (e: ClipboardEvent) => {
        const text = e.clipboardData?.getData('text/plain');
        if (text) {
          // If natural language or multi-line homework text is pasted, insert smoothly
          if (text.length > 20 || text.includes('\n') || /[a-zA-Z]{4,}/.test(text)) {
            e.preventDefault();
            try {
              (mf as any).insert(text, { insertionMode: 'replaceAll' });
            } catch {
              mf.value = text;
            }
            isInternalUpdate.current = true;
            onChange(mf.value);
          }
        }
      };

      mf.addEventListener('input', handleInput);
      mf.addEventListener('change', handleChange);
      mf.addEventListener('keydown', handleKeyDownEvent);
      mf.addEventListener('paste', handlePasteEvent);

      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(mf);
      mfRef.current = mf;

      if (autoFocus) {
        setTimeout(() => {
          mf.focus();
        }, 50);
      }

      return () => {
        mf.removeEventListener('input', handleInput);
        mf.removeEventListener('change', handleChange);
        mf.removeEventListener('keydown', handleKeyDownEvent);
        mf.removeEventListener('paste', handlePasteEvent);
        if (containerRef.current) {
          containerRef.current.innerHTML = '';
        }
      };
    }, []);

    // Synchronisation de la valeur externe vers Mathfield si changement hors de l'input
    useEffect(() => {
      if (isInternalUpdate.current) {
        isInternalUpdate.current = false;
        return;
      }
      if (mfRef.current && mfRef.current.value !== value) {
        mfRef.current.value = value || '';
      }
    }, [value]);

    useImperativeHandle(ref, () => ({
      insert: (latex: string) => {
        if (mfRef.current) {
          mfRef.current.focus();
          mfRef.current.insert(latex, { selectionMode: 'placeholder' });
          onChange(mfRef.current.value);
        }
      },
      insertText: (latex: string) => {
        if (mfRef.current) {
          mfRef.current.focus();
          mfRef.current.insert(latex, { selectionMode: 'placeholder' });
          onChange(mfRef.current.value);
        }
      },
      setValue: (latex: string) => {
        if (mfRef.current) {
          mfRef.current.value = latex;
          onChange(latex);
        }
      },
      focus: () => {
        mfRef.current?.focus();
      },
      clear: () => {
        if (mfRef.current) {
          mfRef.current.value = '';
          onChange('');
          mfRef.current.focus();
        }
      },
      backspace: () => {
        if (mfRef.current) {
          mfRef.current.executeCommand('deleteBackward');
          onChange(mfRef.current.value);
          mfRef.current.focus();
        }
      },
      moveLeft: () => {
        if (mfRef.current) {
          mfRef.current.executeCommand('moveToPreviousChar');
          mfRef.current.focus();
        }
      },
      moveRight: () => {
        if (mfRef.current) {
          mfRef.current.executeCommand('moveToNextChar');
          mfRef.current.focus();
        }
      },
      executeCommand: (command: string | [string, ...any[]]) => {
        if (mfRef.current) {
          mfRef.current.executeCommand(command as any);
          onChange(mfRef.current.value);
          mfRef.current.focus();
        }
      },
    }));

    return (
      <div
        ref={containerRef}
        className={`interactive-math-container text-slate-900 dark:text-slate-100 w-full ${className}`}
        onClick={() => mfRef.current?.focus()}
      />
    );
  }
);

InteractiveMathInput.displayName = 'InteractiveMathInput';

export default InteractiveMathInput;
