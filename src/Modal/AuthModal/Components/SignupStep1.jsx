import React, { useState, useEffect } from "react";

const SignupStep1 = ({ onCondition }) => {
  const [agree, setAgree] = useState(false); // 체크박스

  const handleCheckboxChange = (e) => {
    setAgree(e.target.checked);
  };

  // 조건 체크 후 부모에게 전달
  useEffect(() => {
    onCondition(agree); // agree가 true일 때만 부모에게 true 전달
  }, [agree, onCondition]);

  return (
    <div>
      {/* <p>약관동의</p> */}
      <p className="text-lg font-bold text-left">
        서비스 이용을 위해 약관에 동의해주세요
      </p>
      <p className="text-sm text-left">서비스 이용을 위해 간단한 동의가 필요해요</p>

      <div>약관</div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={agree}
          onChange={handleCheckboxChange}
        />
        <span>개인정보 수집 및 이용에 동의합니다</span>
      </div>
    </div>
  );
};

export default SignupStep1;
