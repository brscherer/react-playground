import './App.css'
import { EffectInitialization } from './components/EffectInitialization'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Lifecycle of Reactive Effects</h1>
      <p>Proof of Concept demonstrating React effect lifecycle patterns</p>
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        <EffectInitialization />
      </div>
    </div>
  )
}

export default App
