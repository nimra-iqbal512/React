import { useWatch } from "react-hook-form";

const ConditionalMessage = ({ control }) => {
    console.log("ConditionalMessage Renders");

    // Subscribes only this child component to the "role" field.
    // Now changing role will only re-renders this component. The entire form will not re-render.
    const selectedRole = useWatch({
        control,
        name: "role",
        defaultValue: "guest" // Optional fallback
    });

    if (selectedRole !== "admin") return null;

    return <p className="alert">Warning: You are granting admin privileges.</p>;
}
export default ConditionalMessage