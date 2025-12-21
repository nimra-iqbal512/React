// Tiggering an animation:
// In this example, the external system is animation library in 'animation.jsx'. It provides a JS class called 'FadeAnimation' that takes a DOM node as an argument and exposes start() and stop() methods to control the animation.
// This component uses a 'ref' to access the underlying DOM node. The Effect reads the DOM node from the ref, and automatically starts the animationf or the node when the component appears.

import { useState, useEffect, useRef } from 'react';
import { FadeAnimation } from './animation';

function Welcome() {
  const ref = useRef(null);

  useEffect(() => {
    const animation = new FadeAnimation(ref.current);
    animation.start(1000);
    return () => {
      animation.stop();
    }
  }, []);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%'
      }}
    >
      Welcome
    </h1>
  )
}

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome />}
    </>
  )
}
export default App