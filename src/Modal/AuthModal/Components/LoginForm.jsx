import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";
import useLoginStore from "../../../Store/LoginStore";

const LoginForm = ({ onLogin, switchToFindAccount, switchToSignup }) => {
  const { id, password, setId, setPassword } = useLoginStore();
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // 에러메시지는 실제 확인 필요
  const handleLogin = () => {
    let isValid = true;

    if (!id) {
      isValid = false;
      setIdError("아이디를 확인해주세요");
    } else {
      setIdError("");
    }

    if (!password) {
      isValid = false;
      setPasswordError("비밀번호를 확인해주세요");
    } else {
      setPasswordError("");
    }

    if (isValid) {
      onLogin();
    }
  };

  return (
    // <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl space-y-4 flex flex-col">
    // 그림자 제거
    <div className="bg-white p-6 rounded-lg w-full max-w-xl space-y-4 flex flex-col">
      <div className="flex flex-col space-y-2">
        <InputField
          type="text"
          id="id"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className={`focus:ring-2 ${
            idError ? "ring-red-500" : "ring-blue-500"
          }`}
        />
        {idError && <p className="text-red-500 text-xs">{idError}</p>}
      </div>

      <div className="flex flex-col space-y-2">
        <InputField
          type="password"
          id="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`focus:ring-2 ${
            passwordError ? "ring-red-500" : "ring-blue-500"
          }`}
        />
        {passwordError && (
          <p className="text-red-500 text-xs">{passwordError}</p>
        )}
      </div>

      <Button text={"로그인"} onClick={handleLogin} variant="primary" />

      {/* <br /> */}
      <hr className="border-gray-300" />

      <Button text={"카카오로 로그인"} variant="kakao" />
      <Button text={"네이버로 로그인"} variant="naver" />

      <hr className="border-gray-300" />

      <div className="flex justify-end space-x-2 text-xs text-gray-400">
        {/* <Link 
          to="/signup" 
          className="hover:underline"
        >
          회원가입
        </Link> */}
        <button
          onClick={switchToSignup}
          className="cursor-pointer hover:underline"
        >
          회원가입
        </button>
        {/* <Link>계정/비밀번호 찾기</Link> */}
        <button 
          onClick={switchToFindAccount} 
          className="cursor-pointer hover:underline"
        >
          계정/비밀번호 찾기
        </button>
      </div>

      {/* <Link to="/signup">
        <Button text={"회원가입"} variant="signup" />
      </Link> */}
    </div>
  );
};

export default LoginForm;
