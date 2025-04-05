import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Button from "./Button";
import useSignupStore from "../../../Store/SignupStore";

const SignupStep2 = ({ onCondition }) => {
  const {
    id,
    password,
    passwordConfirm,
    setId,
    setPassword,
    setPasswordConfirm,
    resetSignupStep2,
  } = useSignupStore();

  const [isIdValid, setIsIdValid] = useState(false); // 사용가능한 아이디인지
  const [isIdChecked, setIsIdChecked] = useState(false); // 아이디 중복검사 실행여부
  const [isPasswordValid, setIsPasswordValid] = useState(false); // 비밀번호
  const [isPasswordConfirmValid, setIsPasswordConfirmValid] = useState(false); // 비밀번호 확인

  const checkIdValidity = () => {
    // 비동기요청보내서 중복체크
    setIsIdChecked(true); // 테스트용
    setIsIdValid(true); // 테스트용

    // 아이디중복체크하고 비밀번호입력했는데 다음으로못넘어가는 오류
    // 조건 확인 후 직접 onCondition 호출
    if (password.length >= 8 && password === passwordConfirm) {
      onCondition(true);
    }
  };

  useEffect(() => {
    const isPasswordValidCheck = (pw) => pw.length >= 8;
    const isPasswordConfirmValidCheck = (pw, confirm) => pw === confirm;

    // 비밀번호 조건체크
    // const isPasswordLongEnough = password.length >= 8;
    // setIsPasswordValid(isPasswordLongEnough);

    // 비밀번호와 비밀번호 확인이 일치여부 체크
    // const isPasswordConfirmed = password === passwordConfirm;
    // setIsPasswordConfirmValid(isPasswordConfirmed);

    // 조건을 모두 만족할 경우 onCondition을 true로 설정
    // if (isIdValid && isPasswordValid && isPasswordConfirmValid) {
    // if (isIdChecked && isPasswordValid && isPasswordConfirmValid) {
    if (isIdChecked && isIdValid && isPasswordValidCheck && isPasswordConfirmValidCheck) {
      onCondition(true);
    } else {
      onCondition(false);
    }
    // }, [id, password, passwordConfirm, isIdValid]);
  }, [id, password, passwordConfirm, isIdChecked]);

  // 모달 닫히면 초기화
  useEffect(() => {
    return () => {
      resetSignupStep2(); // zustand 상태 초기화
      setIsIdChecked(false);
      setIsPasswordValid(false);
      setIsPasswordConfirmValid(false);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-lg font-bold text-left">
          아이디와 비밀번호를 입력해주세요
        </p>
        <p className="text-sm text-left">로그인에 사용할 정보를 입력해주세요</p>
      </div>
      <div>
        <p className="text-lg font-semibold text-left">아이디</p>
        <div className="flex items-center w-full space-x-4">
          <div className="flex-7">
            <InputField
              type="text"
              id="id"
              placeholder="아이디를 입력해주세요."
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="flex-3">
            <Button
              text={"중복확인"}
              variant="signup"
              onClick={checkIdValidity}
            />
          </div>
        </div>
        {/* 문구 */}
        {id === "" ? (
          <p className=" text-gray-500 text-xs text-left">
            로그인에 사용할 아이디를 입력해주세요.
          </p>
        ) : // ) : isIdValid === null ? (
        isIdChecked === null ? (
          <p className="text-red-500 text-xs text-left">중복검사를 해주세요.</p>
        ) : // ) : isIdValid ? (
        isIdChecked ? (
          <p className="text-green-500 text-xs text-left">
            사용할 수 있는 아이디입니다.
          </p>
        ) : (
          <p className="text-red-500 text-xs text-left">
            이미 사용중인 아이디입니다.
          </p>
        )}
      </div>

      <div>
        <p className="text-lg font-semibold text-left">비밀번호</p>
        <InputField
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full"
        />
        {/* 문구 */}
        {password === "" ? (
          <p className="text-gray-500 text-xs text-left">
            비밀번호는 8자 이상 입력해주세요.
          </p>
        ) : isPasswordValid ? (
          <p className="text-green-500 text-xs text-left">
            사용할 수 있는 비밀번호입니다.
          </p>
        ) : (
          <p className="text-red-500 text-xs text-left">
            비밀번호는 8자 이상 입력해주세요.
          </p>
        )}
      </div>

      <div>
        <p className="text-lg font-semibold text-left">비밀번호 확인</p>
        <InputField
          type="password"
          id="passwordConfirm"
          placeholder="비밀번호를 입력해주세요."
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="w-full"
        />
        {/* 문구 */}
        {passwordConfirm === "" ? (
          <p className="text-gray-500 text-xs text-left">
            비밀번호를 한번 더 입력해주세요.
          </p>
        ) : isPasswordConfirmValid ? (
          <p className="text-green-500 text-xs text-left">
            사용할 수 있는 비밀번호입니다.
          </p>
        ) : (
          <p className="text-red-500 text-xs text-left">
            비밀번호가 일치하지 않습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignupStep2;
