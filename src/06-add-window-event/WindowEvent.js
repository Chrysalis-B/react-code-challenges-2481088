import { useEffect } from 'react';

export default function WindowEvent() {
  const alertOnDoubleClick = () => alert('Event fired!');

  useEffect(() => {
    window.addEventListener('dblclick', alertOnDoubleClick);
    return () => {
      window.removeEventListener('dblclick', alertOnDoubleClick);
    }
  }, []);
  
  return (
    <h2>Window event active</h2>
  );
}
