import { useState, useEffect } from 'react';

export function CustomHooks() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid teal' }}>
      <h2>Custom Hooks Pattern</h2>
      <p>Window Size: {windowSize.width} x {windowSize.height}</p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        This demonstrates the pattern used in custom hooks. Try resizing the window to see the values update.
      </p>
    </div>
  );
}
