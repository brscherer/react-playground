import { setupWorker } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

export async function startMockServiceWorker() {
  if (typeof window === 'undefined') return;
  await worker.start({ onUnhandledRequest: 'bypass' });
}
