import { Link } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";
import useLoginStore from "../../../Store/LoginStore";

const LoginForm = ({ onLogin }) => {
    const { id, password, setId, setPassword } = useLoginStore();

    return(
        // <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4 flex flex-col">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl space-y-4 flex flex-col">
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

            <Button 
                text={"로그인"} 
                onClick={onLogin} 
                variant="primary"
            />

            <br />

            <Button 
                text={"카카오로 로그인"}
                variant="kakao"
            />
            <Button 
                text={"네이버로 로그인"} 
                variant="naver"
            />

            <hr />
            
            <Link to="/signup">
                <Button
                    text={"회원가입"} 
                    variant="signup"
                />
            </Link>
        </div>
    );
};

export default LoginForm;