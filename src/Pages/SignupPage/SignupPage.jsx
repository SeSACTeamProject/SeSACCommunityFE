import React from "react";
import SignupForm from "./Components/SignupForm";

const SignupPage = () => {
    const handleSignup = async () => {
        console.log('미완성');
    }

    return(
        <div className="w-full h-screen bg-violet-400 flex items-center justify-center">
            <div className="bg-orange-300 min-h-screen w-3xl p-6 flex items-center justify-center flex-col">
                <p className="text-3xl font-bold pb-6">회원가입</p>
                <SignupForm onSignup={handleSignup} />
            </div>
        </div>
    );
};

export default SignupPage;