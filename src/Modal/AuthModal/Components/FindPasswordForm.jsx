import Button from "./Button";

const FindPasswordForm = ({ switchToFindAccount }) => {
  return (
    <div className="flex flex-col space-y-4">
      <input
        type="email"
        placeholder="가입한 이메일"
        className="p-2 border rounded"
      />
      <Button 
        text={"비밀번호 찾기"}
        className="primary"
      />

      <div className="flex justify-between text-xs text-gray-500">
        <button 
          onClick={switchToFindAccount} 
          className="cursor-pointer hover:underline"
        >
          계정 찾기
        </button>
      </div>
    </div>
  );
};

export default FindPasswordForm;
