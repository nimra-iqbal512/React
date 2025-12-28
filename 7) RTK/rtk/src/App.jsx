import Home from "./Home"
import { useSelector } from "react-redux";

function App() {
  const value = 20;
  const { c } = useSelector(state => state.custom);

  return (
    <>
      <h2>{c}</h2>
      <Home value={value} />
    </>
  )
}

export default App
