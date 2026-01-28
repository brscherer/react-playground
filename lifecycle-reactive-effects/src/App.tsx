import './App.css'
import { EffectInitialization } from './components/EffectInitialization'
import { EffectSynchronization } from './components/EffectSynchronization'
import { ReactiveEffects } from './components/ReactiveEffects'
import { EffectCleanup } from './components/EffectCleanup'
import { BreakingCycles } from './components/BreakingCycles'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Lifecycle of Reactive Effects</h1>
      <p>Proof of Concept demonstrating React effect lifecycle patterns</p>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        <EffectInitialization />
        <EffectSynchronization />
        <ReactiveEffects />
        <EffectCleanup />
        <BreakingCycles />
      </div>
    </div>
  )
}

export default App
