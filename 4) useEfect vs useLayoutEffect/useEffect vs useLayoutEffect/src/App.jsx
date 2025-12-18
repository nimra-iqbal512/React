import { useLayoutEffect, useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("Render started");

  useEffect(() => {
    console.log("useEffect started");
    console.log("useEffect finished");
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect started");
    console.log("useLayoutEffect finished");
  }, [count]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Re-render
      </button>
    </div>
  );
}

export default App;
