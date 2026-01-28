import { useState, useEffect } from 'react';

export function EffectCleanup() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (!isSubscribed) return;

    console.log('Subscribing to events...');

    const handleEvent = () => {
      console.log('Event received!');
    };

    window.addEventListener('resize', handleEvent);

    return () => {
      console.log('Cleaning up: removing event listener');
      window.removeEventListener('resize', handleEvent);
    };
  }, [isSubscribed]);

  return (
    <div style={{ padding: '20px', border: '1px solid green' }}>
      <h2>Effect Cleanup</h2>
      <button onClick={() => setIsSubscribed(!isSubscribed)}>
        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
      <p>{isSubscribed ? 'Subscribed to window resize events' : 'Not subscribed'}</p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        Try resizing the window. Check console to see subscription/cleanup logs
      </p>
    </div>
  );
}
