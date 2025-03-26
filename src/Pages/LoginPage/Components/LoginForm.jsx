import InputField from "./InputField";
import Button from "./Button";
import useLoginStore from "../../../Store/LoginStore";

const LoginForm = ({ onLogin, onSignup }) => {
    const { id, password, setId, setPassword } = useLoginStore();

    return(
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4 flex flex-col">
            <div className="flex flex-col space-y-2">
                <InputField
                    type="text"
                    id="id"
                    placeholder="아이디"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>

            <div className="flex flex-col space-y-2">
                <InputField
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button text={"로그인"} onClick={onLogin} />
            <Button text={"회원가입"} onClick={onSignup} />
        </div>
    );
};

export default LoginForm;