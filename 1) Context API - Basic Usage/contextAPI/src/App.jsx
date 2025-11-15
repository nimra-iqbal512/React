//We need useContext Hook to use any value of any context
import { useContext } from "react";
import { CounterContext } from "./context/Counter";

import Counter from "./components/Counter";

function App() {
  const counterState = useContext(CounterContext);
  console.log("Counter State from App.jsx:", counterState);
  return (
    <>
      <div className="App">
        <h1>Count is {counterState.count}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  )
}

export default App