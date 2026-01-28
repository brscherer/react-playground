import { useState, useEffect } from 'react';

export function ReactiveEffects() {
  const [count, setCount] = useState(0);
  const [doubled, setDoubled] = useState(0);

  useEffect(() => {
    console.log('Effect: count changed, updating doubled');
    setDoubled(count * 2);
  }, [count]);

  return (
    <div style={{ padding: '20px', border: '1px solid purple' }}>
      <h2>Reactive Effects</h2>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p style={{ fontSize: '12px', color: '#666' }}>
        When you increment count, the effect automatically re-runs and updates the doubled value
      </p>
    </div>
  );
}
