import React from "react";
import LoginForm from "./Components/LoginForm";
import xmark from "../../Assets/xmark-solid.svg";
import useLoginModalStore from "../../Store/LoginModalStore";

const LoginModal = () => {
  const { closeModal } = useLoginModalStore();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button onClick={closeModal} className="absolute top-2 right-2">
          <img src={xmark} alt="닫기" className="w-6 h-6 hover:opacity-70" />
        </button>
        <h2 className="text-xl font-bold mb-4">로그인</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginModal;
