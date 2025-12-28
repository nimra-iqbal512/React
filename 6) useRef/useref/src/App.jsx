// == Two things learn here
// 1) changing useRef does not cause the component to re-render
// 2) When component re-renders, userRef still keeps its current value. It not get initialized with its initial value

import { useRef, useState } from "react";

function App() {
  console.log("Render");

  // useRef keeps its value even after re - renders.
  // It does NOT reset to its initial value when the component re - renders.
  const countRef = useRef(0);

  const [count, setCount] = useState(0);

  console.log(count);
  console.log(countRef.current);

  return (
    <>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>

      <button onClick={() => setCount(count + 1)}>
        Re-render (state)
      </button>

      <button onClick={() => countRef.current += 1}>
        Change ref
      </button>    </>
  )
}

export default App;