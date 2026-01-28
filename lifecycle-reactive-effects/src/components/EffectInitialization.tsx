import { useState, useEffect } from 'react';

export function EffectInitialization() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Effect: Component mounted, fetching initial data');

    setTimeout(() => {
      setData('Initial data loaded');
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid orange' }}>
      <h2>Effect Initialization</h2>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
      <p style={{ fontSize: '12px', color: '#666' }}>
        Empty dependency array means this effect runs only once on mount
      </p>
    </div>
  );
}
