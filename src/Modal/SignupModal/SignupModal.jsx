import React from "react";
import useSignupModalStore from "../../Store/SignupModalStore";

const SignupModal = () => {
  const { closeModal } = useLoginModalStore();

  return(
    <div 
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
      onClick={closeModal} // 배경 클릭 시 닫힘
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않게 방지
      >
        <button onClick={closeModal} className="absolute top-2 right-2">
          {/* X 버튼 */}
          <img src={xmark} alt="닫기" className="w-6 h-6 hover:opacity-70" />
        </button>
        <h2 className="text-xl font-bold mb-4">로그인</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default SignupModal;