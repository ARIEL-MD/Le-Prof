import cluster from 'node:cluster';
import { availableParallelism } from 'node:os';

const requested = Number(process.env.LE_PROF_CLUSTER_WORKERS || 0);
const workerCount = Math.max(1, Math.min(requested || availableParallelism(), 8));

if (cluster.isPrimary) {
  let shuttingDown = false;
  let workersStarted = 0;

  const forkWorker = () => {
    if (shuttingDown) return;
    const worker = cluster.fork();
    workersStarted++;
    worker.on('exit', () => {
      if (!shuttingDown) forkWorker();
    });
  };

  for (let i = 0; i < workerCount; i++) forkWorker();

  const shutdown = (signal: string) => {
    if (shuttingDown) return;
    shuttingDown = true;
    console.log(`[cluster] ${signal}: arrêt de ${workersStarted} worker(s)`);
    for (const worker of Object.values(cluster.workers)) worker?.process.kill(signal as NodeJS.Signals);
    setTimeout(() => process.exit(0), 5000).unref();
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));

  console.log(`[cluster] ${workerCount} worker(s) actif(s)`);
} else {
  import('./server').catch((err) => {
    console.error('[cluster] échec du démarrage du worker :', err);
    process.exit(1);
  });
}
