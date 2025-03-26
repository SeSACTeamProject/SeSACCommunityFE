import React from "react";
import LoginForm from "./Components/LoginForm";

const LoginPage = () => {
    const handleLogin = async () => {
        console.log('미완성');
    };

    const handleSignup = async () => {
        console.log('미완성2');
    };

    return(
        <div className="w-full min-h-screen bg-amber-100">
            <div className="bg-green-200 p-6 min-h-screen flex items-center justify-center">
                <LoginForm 
                    onLogin={handleLogin} 
                    onSignup={handleSignup}
                />
            </div>
        </div>
    );
};

export default LoginPage;