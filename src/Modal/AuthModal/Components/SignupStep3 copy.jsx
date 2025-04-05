import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Button from "./Button";
import useSignupStore from "../../../Store/SignupStore";

const SignupStep3 = ({ onCondition }) => {
  const { name, phone, email, setName, setPhone, setEmail, resetSignupStep3 } =
    useSignupStore();

  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(null); // 유효성 검사 결과
  const [isPhoneChecked, setIsPhoneChecked] = useState(false); // 중복 검사 완료 여부

  const [isEmailValid, setIsEmailValid] = useState(null); // 유효성 검사 결과
  const [isEmailChecked, setIsEmailChecked] = useState(false); // 중복 검사 완료 여부

  // 휴대폰 번호 유효성 검사 (실시간)
  const handlePhoneNumberChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, ""); // 숫자만 남기기
    if (value.length <= 3) {
      value = value;
    } else if (value.length <= 7) {
      value = value.replace(/(\d{3})(\d{0,4})/, "$1-$2");
    } else {
      value = value.replace(/(\d{3})(\d{4})(\d{0,4})/, "$1-$2-$3");
    }
    setPhone(value);

    // 휴대폰 번호 실시간 유효성 검사
    const phoneRegex = /^(\d{3})-(\d{4})-(\d{4})$/;
    if (phoneRegex.test(value)) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }

    setIsPhoneChecked(false); // 변경되면 다시 확인 필요
  };

  // 이메일 유효성 검사 (실시간)
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // 이메일 실시간 유효성 검사
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(value)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    setIsEmailChecked(false); // 변경되면 다시 확인 필요
  };

  // 중복검사 함수
  const checkPhoneValidity = () => {
    setIsPhoneChecked(true); // 중복검사 완료 상태로 업데이트
  };

  const checkEmailValidity = () => {
    setIsEmailChecked(true); // 중복검사 완료 상태로 업데이트
  };

  useEffect(() => {
    // 이름 조건체크
    const isNameOK = name.length >= 2;
    setIsNameValid(isNameOK);

    const allValid =
      isNameOK &&
      isPhoneValid === true &&
      isPhoneChecked &&
      isEmailValid === true &&
      isEmailChecked;
    onCondition(allValid);
  }, [name, isPhoneValid, isPhoneChecked, isEmailValid, isEmailChecked]);

  useEffect(() => {
    return () => {
      resetSignupStep3();
      setIsPhoneValid(null);
      setIsPhoneChecked(false);
      setIsEmailValid(null);
      setIsEmailChecked(false);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-lg font-bold text-left">회원 정보를 입력해주세요.</p>
        <p className="text-sm text-left">
          이름, 휴대폰 번호, 이메일을 입력해주세요.
        </p>
      </div>

      {/* 이름 */}
      <div>
        <p className="text-lg font-semibold text-left">이름</p>
        <InputField
          type="text"
          id="name"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name === "" ? (
          <p className="text-gray-500 text-xs text-left">
            실명을 입력해주세요.
          </p>
        ) : isNameValid ? (
          <p className="text-green-500 text-xs text-left">
            사용할 수 있는 이름입니다.
          </p>
        ) : (
          <p className="text-red-500 text-xs text-left">
            이름은 2자 이상 입력해주세요.
          </p>
        )}
      </div>

      {/* 휴대폰 번호 */}
      <div>
        <p className="text-lg font-semibold text-left">휴대폰 번호</p>
        <div className="flex items-center w-full space-x-4">
          <div className="flex-7">
            <InputField
              type="text"
              id="phone"
              placeholder="숫자만 입력해주세요."
              value={phone}
              onChange={handlePhoneNumberChange}
              maxLength={phone.length < 10 ? undefined : 13}
              className="w-full"
            />
          </div>
          <div className="flex-3">
            <Button
              text={"중복확인"}
              variant="signup"
              onClick={checkPhoneValidity}
            />
          </div>
        </div>
        {phone === "" ? (
          <p className="text-gray-500 text-xs text-left">
            '-' 없이 숫자만 입력해주세요.
          </p>
        ) : !isPhoneChecked ? (
          <p className="text-red-500 text-xs text-left">
            휴대폰 번호 중복확인을 해주세요.
          </p>
        ) : isPhoneValid ? (
          <p className="text-green-500 text-xs text-left">
            사용할 수 있는 휴대폰 번호입니다.
          </p>
        ) : (
          <p className="text-red-500 text-xs text-left">
            휴대폰 번호 형식이 올바르지 않습니다.
          </p>
        )}
      </div>

      {/* 이메일 */}
      <div>
        <p className="text-lg font-semibold text-left">이메일</p>
        <div className="flex items-center w-full space-x-4">
          <div className="flex-7">
            <InputField
              type="text"
              id="email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={handleEmailChange}
              className="w-full"
            />
          </div>
          <div className="flex-3">
            <Button
              text={"중복확인"}
              variant="signup"
              onClick={checkEmailValidity}
            />
          </div>
        </div>
        {email === "" ? (
          <p className="text-gray-500 text-xs text-left">
            비밀번호 찾기에 사용됩니다.
          </p>
        ) : !isEmailChecked ? (
          <p className="text-red-500 text-xs text-left">
            이메일 중복확인을 해주세요.
          </p>
        ) : isEmailValid ? (
          <p className="text-green-500 text-xs text-left">
            사용할 수 있는 이메일입니다.
          </p>
        ) : (
          <p className="text-red-500 text-xs text-left">
            이메일 형식이 올바르지 않습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignupStep3;
