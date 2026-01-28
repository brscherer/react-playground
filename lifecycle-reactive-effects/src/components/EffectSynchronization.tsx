import { useState, useEffect } from 'react';

export function EffectSynchronization() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('Effect runs: count changed to', count);
  }, [count]);

  useEffect(() => {
    console.log('Effect runs: text changed to', text);
  }, [text]);

  return (
    <div style={{ padding: '20px', border: '1px solid blue' }}>
      <h2>Effect Synchronization (Dependency Array)</h2>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p style={{ fontSize: '12px', color: '#666' }}>
        Check console to see which effect runs when you interact with inputs
      </p>
    </div>
  );
}
