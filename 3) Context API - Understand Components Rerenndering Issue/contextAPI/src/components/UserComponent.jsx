import { useContext } from "react";
import { AppContext } from "../context/AppContext"

const UserComponent = () => {
    const { user, setUser } = useContext(AppContext);

    const changeUser = () => {
        setUser({ name: "Jane Doe" });
    }

    console.log("name rendered");
    
    return (
        <div>
            <h2>{user.name}</h2>
            <button onClick={changeUser}>Change User Name</button>
        </div>
    )
};

export default UserComponent;  