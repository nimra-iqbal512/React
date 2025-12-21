import { useLayoutEffect, useState } from "react";
import { useEffect } from "react";

function App() {
  console.log("=====Render started");
  const [count, setCount] = useState(0);


  // useEffect(() => {
  //   console.log("useEffect started");
  //   const start = Date.now();
  //   while (Date.now() - start < 3000) {
  //     // ⛔ Blocking the main thread for 5 seconds
  //   }
  // for (let index = 0; index < 3000; index++) {
  //   // 
  //   console.log("");
  // }
  //   console.log("useEffect finished");
  // }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect started");
    // const start = Date.now();
    // while (Date.now() - start < 3000) {
    //   // ⛔ Blocking the main thread for 5 seconds
    // }
    for (let index = 0; index < 3000; index++) {
      // 
      console.log("");
    }
    console.log("useLayoutEffect finished");
  }, [count]);

  return (
    <div style={{ padding: 40 }}>
      {console.log("Inside...", count)}
      <h1>Count: {count}</h1>
      {console.log("Done...", count)}
      <button onClick={() => setCount(c => c + 1)}>
        Re-render
      </button>
    </div>
  );
}

export default App;
