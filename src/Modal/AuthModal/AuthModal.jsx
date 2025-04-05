import React, { useState, useEffect } from "react";
import LoginForm from "./Components/LoginForm";
import FindAccountForm from "./Components/FindAccountForm";
import FindPasswordForm from "./Components/FindPasswordForm";
import SignupForm from "./Components/SignupForm";
import xmark from "../../Assets/xmark-solid.svg";
import prev from "../../Assets/chevron-left-solid.svg";
import useAuthModalStore from "../../Store/AuthModalStore";

const AuthModal = () => {
  const { closeModal } = useAuthModalStore();

  const [modalContent, setModalContent] = useState("login"); // "login", "findAccount", "findPassword", "signup"

  const [signupStep, setSignupStep] = useState(1);

  const modalTitles = {
    login: "로그인",
    findAccount: "계정 찾기",
    findPassword: "비밀번호 찾기",
  };

  // 여기에 회원가입모달까지 더해서 auth modal로 통합
  const renderContent = () => {
    switch (modalContent) {
      case "login":
        return (
          <LoginForm
            switchToFindAccount={() => setModalContent("findAccount")}
            // switchToSignup={() => setModalContent("signup")}
            switchToSignup={() => {
              setModalContent("signup");
              setSignupStep(1); // 초기화
            }}
          />
        );
      case "findAccount":
        return (
          <FindAccountForm
            switchToFindPassword={() => setModalContent("findPassword")}
          />
        );
      case "findPassword":
        return (
          <FindPasswordForm
            switchToFindAccount={() => setModalContent("findAccount")}
          />
        );
      case "signup":
        // return <SignupForm showPrevButton={setSignupPrevStep} />;
        return (
          <SignupForm
            step={signupStep}
            nextStep={() => setSignupStep((prev) => prev + 1)}
            prevStep={() => setSignupStep((prev) => prev - 1)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
      onClick={closeModal} // 배경 클릭 시 닫힘
    >
      <div
        // className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않게 방지
      >
        {/* 뒤로가기 버튼 */}
        {modalContent === "signup" && signupStep > 1 && (
          <button
            // onClick={signupPrevStep}
            onClick={() => setSignupStep((prev) => prev - 1)}
            className="absolute top-2 left-2 hover:cursor-pointer"
          >
            <img src={prev} alt="이전으로" className="w-6 h-6 hover:opacity-70" />
          </button>
        )}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 hover:cursor-pointer"
        >
          {/* X 버튼 */}
          <img src={xmark} alt="닫기" className="w-6 h-6 hover:opacity-70" />
        </button>
        <h2 className="text-xl font-bold mb-4">
          {/* 제목 */}
          {modalTitles[modalContent] || ""}
        </h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default AuthModal;
