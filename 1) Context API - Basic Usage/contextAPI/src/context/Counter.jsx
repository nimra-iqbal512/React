// 'createContext' creates a context/box that stores shred data.
// 'useState' stores a piece of state(like a variable that can update)
import { createContext, useState } from "react";

export const CounterContext = createContext(null); //We can give default value here, like we give default value to useState. Here default is 'null'

// Context Provider Component
export const CounterProvider = (props) => {
    const [count, setCount] = useState(5);

    return (
        // The 'value' passed to Provider will be accessible to all the children components
        <CounterContext.Provider value={{ count, setCount }}>
            {console.log("CounterContext", CounterContext)}
            {props.children}    //props mai jo b ae ga, wo yaha render ho jaye ga
        </CounterContext.Provider>
    )
} 