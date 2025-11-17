import { useContext } from "react";
import { AppContext } from "../context/AppContext"

const SettingsComponent = () => {
    const { settings, setSettings } = useContext(AppContext);

    const toggleTheme = () => {
        setSettings((prev)=>({
            theme: prev.theme === "light" ? "dark" : "light"
        }));
    }
    console.log("settings rendered");

    return (
        <div>
            <h2>{settings.theme}</h2>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )
};

export default SettingsComponent;  