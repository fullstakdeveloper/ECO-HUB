import React from "react";
import "./login.css";

function Login() {
    const handleLoginClick = () => {
        // Empty function for now, does nothing
    };

    return (
        <div className="login-container">
            <button onClick={handleLoginClick} className="login-button">Log in</button>
        </div>
    );
}

export default Login;
