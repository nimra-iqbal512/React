import { useRef } from "react";

const UnControlledComp = () => {
    console.log("UnControlledComp Renders");

    const emailRef = useRef();
    const passwordRef = useRef();

    function onSubmit() {
        alert("Email value: " + emailRef.current.value);
        alert("Password value: " + passwordRef.current.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                ref={emailRef}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                ref={passwordRef}
                required
            />
            <input type="submit" value="Submit" />
        </form>
    );
}
export default UnControlledComp