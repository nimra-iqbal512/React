import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({children}) => {
    const [user, setUser] = useState({ name: "Nimra" });
    const [settings, setSettings] = useState({ theme: "light" });
    return (
        <AppContext.Provider value={{user, setUser, settings, setSettings}}>
            {children}
        </AppContext.Provider>
    )
}
