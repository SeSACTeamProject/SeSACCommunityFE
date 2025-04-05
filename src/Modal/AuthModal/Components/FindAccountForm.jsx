import Button from "./Button";

const FindAccountForm = ({ switchToFindPassword }) => {
  return (
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="가입한 이메일"
        className="p-2 border rounded"
      />
      <Button 
        text={"계정 찾기"} 
        classname="primary"
      />

      <div className="flex justify-between text-xs text-gray-500">
        <button
          onClick={switchToFindPassword}
          className="cursor-pointer hover:underline"
        >
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
};

export default FindAccountForm;
