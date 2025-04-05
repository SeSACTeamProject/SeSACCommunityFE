import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Button from "./Button";
import useSignupStore from "../../../Store/SignupStore";

const SignupStep4 = ({ onCondition }) => {
  const { nickname, birthdate, setNickname, setBirthdate } = useSignupStore();

  const [isNicknameValid, setIsNicknameValid] = useState(null);
  const [isNicknameLengthValid, setIsNicknameLengthValid] = useState(false); // 닉네임길이
  const [isNicknameCharValid, setIsNicknameCharValid] = useState(false); // 닉네임 특수문자여부
  const [isNicknameChecked, setIsNicknameChecked] = useState(null); // 닉네임 중복체크여부
  const [birthdateStatus, setBirthdateStatus] = useState(""); // null, empty, invalid-format, invalid-date, valid

  const checkNicknameValidity = () => {
    // 길이 형식 둘다 충족해야됨
    if (!isNicknameLengthValid || !isNicknameCharValid) return;

    // 비동기통신필요
    setIsNicknameChecked(true); // 테스트용
  };

  const handleBirthdateChange = (e) => {
    const raw = e.target.value.replace(/[^\d]/g, ""); // 숫자만 허용
    setBirthdate(raw); // 상태 업데이트

    if (raw === "") {
      setBirthdateStatus("empty");
      return;
    }

    if (!/^\d{8}$/.test(raw)) {
      setBirthdateStatus("invalid-format");
      return;
    }

    const year = parseInt(raw.slice(0, 4));
    const month = parseInt(raw.slice(4, 6));
    const day = parseInt(raw.slice(6, 8));

    const date = new Date(year, month - 1, day);

    const isValidDate =
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day;

    if (!isValidDate) {
      setBirthdateStatus("invalid-date");
    } else {
      setBirthdateStatus("valid");
    }
  };

  useEffect(() => {
    setIsNicknameLengthValid(nickname.length >= 2);
    setIsNicknameCharValid(/^[a-zA-Z0-9가-힣]+$/.test(nickname)); // 특수문자 포함 여부

    // 닉네임이 바뀌면 중복체크는 초기화
    setIsNicknameChecked(null);
  }, [nickname]);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-lg font-bold text-left">
          닉네임과 생년월일을 입력해주세요.
        </p>
        <p className="text-sm text-left">
          커뮤니티 활동과 본인 확인에 필요한 정보입니다.
        </p>
      </div>

      <div>
        <p className="text-lg font-semibold text-left">닉네임</p>
        <div className="flex items-center w-full space-x-4">
          <div className="flex-7">
            <InputField
              type="text"
              id="nickname"
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex-3">
            <Button
              text={"중복확인"}
              variant="signup"
              onClick={checkNicknameValidity}
            />
          </div>
        </div>
        {/* 문구 */}
        {nickname === "" ? (
          <p className="text-gray-500 text-xs text-left">
            다른 사용자에게 보여질 이름입니다.
          </p>
        ) : !isNicknameLengthValid ? (
          <p className="text-red-500 text-xs text-left">
            닉네임은 2자 이상 입력해주세요.
          </p>
        ) : !isNicknameCharValid ? (
          <p className="text-red-500 text-xs text-left">
            특수문자는 사용할 수 없습니다.
          </p>
        ) : isNicknameChecked === null ? (
          <p className="text-red-500 text-xs text-left">
            닉네임 중복확인을 해주세요.
          </p>
        ) : isNicknameChecked ? (
          <p className="text-green-500 text-xs text-left">
            사용할 수 있는 닉네임입니다.
          </p>
        ) : (
          <p className="text-red-500 text-xs text-left">
            이미 사용 중인 닉네임입니다.
          </p>
        )}
      </div>

      <div>
        <p className="text-lg font-semibold text-left">생년월일</p>
        <div className="flex items-center w-full space-x-4">
          <InputField
            type="text"
            id="birthdate"
            placeholder="예: 19900101"
            value={birthdate} // 생년월일을 상태값으로 전달
            onChange={handleBirthdateChange} // 상태 업데이트 함수 연결
            maxLength={8}
          />
        </div>
        {/* 문구 */}
        {birthdateStatus === "empty" || birthdateStatus === null ? (
          <p className="text-gray-500 text-xs text-left">
            생년월일 8자리 숫자로 입력해주세요
          </p>
        ) : birthdateStatus === "invalid-format" ? (
          <p className="text-red-500 text-xs text-left">
            생년월일 형식이 올바르지 않습니다.
          </p>
        ) : birthdateStatus === "invalid-date" ? (
          <p className="text-red-500 text-xs text-left">
            존재하지 않는 날짜입니다.
          </p>
        ) : (
          <p className="text-green-500 text-xs text-left">
            올바른 생년월일입니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignupStep4;
