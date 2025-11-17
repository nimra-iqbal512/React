//We need useContext Hook to use any value of any context
import { AppProvider } from "./context/AppContext";

import UserComponent from "./components/UserComponent";
import SettingsComponent from "./components/SettingsComponent";

function App() {
  return (
    <>
      <div className="App">
        <h1>Context API Rerender example</h1>

        <AppProvider>
          <UserComponent />
          <SettingsComponent />
        </AppProvider>
      </div>
    </>
  )
}

export default App