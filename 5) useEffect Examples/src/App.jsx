// Listening to a global browser event:
// In this example, the external system is the browser DOM itself. Normally, you'd specify event listeners with JSX, but you can't listen to the global 'window' object this way. 
// An Effect lets you connect to the 'window' object and listen to its events. Listening to the 'pointermove' event lets you track the cursor position, and update the red dot to move it.

import { useState, useEffect } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove); //When component mounts, it connects React to an external system (the browser window object).
    return () => {
      window.removeEventListener('pointermove', handleMove);
    }
  }, []);

  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity: 0.6,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  )
}
