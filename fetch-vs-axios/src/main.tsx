import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

async function init() {
  if (import.meta.env.DEV) {
    try {
      const { startMockServiceWorker } = await import('./mocks/browser');
      await startMockServiceWorker();
      console.log('MSW: mock service worker started');
    } catch (e) {
      console.warn('MSW failed to start', e);
    }
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

init();
