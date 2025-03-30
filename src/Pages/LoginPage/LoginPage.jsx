import React from "react";
import LoginForm from "./Components/LoginForm";

const LoginPage = () => {
    const handleLogin = async () => {
        console.log('미완성');
    };

    return(
        <div className="w-full h-screen bg-amber-100 flex items-center justify-center">
            <div className="bg-green-200 min-h-screen w-3xl p-6 flex items-center justify-center flex-col">
                <p className="text-3xl font-bold pb-6">로그인</p>
                <LoginForm onLogin={handleLogin} />
            </div>
        </div>
    );
};

export default LoginPage;