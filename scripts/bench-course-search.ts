import { performance } from 'node:perf_hooks';
import { findOfficialCourse, getLastOfficialCourseSearchDiagnostics } from '../src/data/courses/index';
import { searchAcademicCourseUnified } from '../server/academicSearchEngine';

const iterations = Number(process.env.BENCH_ITERATIONS || 100);
const queries = ['guerre froide', 'oxydation des corps purs simples'];

function stats(values: number[]) {
  const sorted = [...values].sort((a,b) => a-b);
  const pct = (p:number) => sorted[Math.min(sorted.length-1, Math.floor(sorted.length*p))];
  return {
    meanMs: Number((values.reduce((a,b)=>a+b,0)/values.length).toFixed(3)),
    p50Ms: Number(pct(.5).toFixed(3)),
    p95Ms: Number(pct(.95).toFixed(3)),
    maxMs: Number(sorted[sorted.length-1].toFixed(3)),
  };
}

for (const query of queries) {
  const samples:number[]=[];
  let result:any = null;
  for (let i=0;i<iterations;i++) {
    const t=performance.now();
    result=findOfficialCourse(query);
    samples.push(performance.now()-t);
  }
  console.log(JSON.stringify({type:'findOfficialCourse',query,result:result?.lessonTitle||result?.chapter||null,diagnostics:getLastOfficialCourseSearchDiagnostics(),...stats(samples)}));
}

for (const query of queries) {
  const samples:number[]=[];
  let result:any = null;
  for (let i=0;i<Math.max(10, Math.floor(iterations/5));i++) {
    const t=performance.now();
    result=await searchAcademicCourseUnified({query,userSeed:`bench-${query}-${i}`,variant:i%4,bypassCache:true});
    samples.push(performance.now()-t);
  }
  console.log(JSON.stringify({type:'searchAcademicCourseUnified',query,result:result?.chapterTitle||null,bypassCache:true,...stats(samples)}));
}
