import ControlledComp from './ControlledComp'
import UnControlledComp from './UnControlledComp';

function App() {
  console.log("App Renders");

  return (
    <div className="App">
      <ControlledComp />
      {/* <UnControlledComp /> */}
    </div>
  );
}

export default App
