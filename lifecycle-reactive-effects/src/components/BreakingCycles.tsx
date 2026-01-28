import { useState, useEffect } from 'react';

export function BreakingCycles() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Effect ran with count:', count);
    setMessage(`Count is now ${count}`);
  }, [count]);

  return (
    <div style={{ padding: '20px', border: '1px solid red' }}>
      <h2>Breaking Infinite Cycles</h2>
      <p>Count: {count}</p>
      <p>Message: {message}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p style={{ fontSize: '12px', color: '#666' }}>
        By including count in the dependency array, the effect only runs when count changes, preventing infinite loops
      </p>
    </div>
  );
}
