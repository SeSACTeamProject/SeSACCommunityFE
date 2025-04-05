import React, { useState, useEffect } from "react";
import Button from "./Button";
import SignupStep1 from "./SignupStep1";
import SignupStep2 from "./SignupStep2";
import SignupStep3 from "./SignupStep3";
import SignupStep4 from "./SignupStep4";
import SignupStep5 from "./SignupStep5";
import SignupStep6 from "./SignupStep6";

const SignupForm = ({ step, prevStep, nextStep }) => {
  useEffect(() => {
    console.log("현재 step:", step); // step 상태 확인
  }, [step]);

  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // 버튼 활성화 상태관리

  // 각 스텝의 버튼 상태를 관리
  const handleCondition = (isValid) => {
    setIsButtonEnabled(isValid); // 각 스텝에서 조건을 만족했을 때 버튼 활성화
  };

  const progress = (step - 1) * 0.2;

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SignupStep1 onCondition={handleCondition} />;
      case 2:
        return <SignupStep2 onCondition={handleCondition} />;
      case 3:
        return <SignupStep3 onCondition={handleCondition} />;
      case 4:
        return <SignupStep4 onCondition={handleCondition} />;
      case 5:
        return <SignupStep5 onCondition={handleCondition} />;
      case 6:
        return <SignupStep6 onCondition={handleCondition} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full max-w-xl space-y-4 flex flex-col">
      <p className="text-2xl">회원가입 {step}</p>

      {/* 진행 바 */}
      <div className="w-full bg-gray-300 h-1 rounded-full mb-4">
        <div
          className="h-full bg-black rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* 표시되는 내용 */}
      {renderStep()}

      <Button
        text={step < 6 ? "다음" : "회원가입 완료"}
        variant="signup"
        onClick={nextStep}
        disabled={!isButtonEnabled}
      />
    </div>
  );
};

export default SignupForm;
