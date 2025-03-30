import InputField from "./InputField";
import Button from "./Button";
import useSignupStore from "../../../Store/SignupStore";

const SignupForm = ({ onSignup }) => {
    const { id, password, passwordConfirm, email, name, phone, birthdate, setId, setPassword, setPasswordConfirm, setEmail, setName, setPhone, setBirthdate } = useSignupStore();
    return(
        // <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4 flex flex-col">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl space-y-4 flex flex-col">
            {/* <div className="flex flex-col space-y-2"> */}
            {/* <div className="flex items-center justify-between m-0 space-y-2"> */}
            <div className="flex items-center justify-between">
                <InputField
                    type="text"
                    id="id"
                    placeholder="아이디"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <Button text={"중복확인"} />
            </div>

            <div className="flex flex-col space-y-2">
            {/* <div className="flex flex-colx"> */}
            {/* <div> */}
                <InputField
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="flex flex-col space-y-2">
                <InputField
                    type="password"
                    id="passwordConfirm"
                    placeholder="비밀번호 확인"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />
            </div>

            {/* <div className="flex flex-col space-y-2"> */}
            <div className="flex items-center justify-between">
                <InputField
                    type="text"
                    id="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button text={"중복확인"} />
            </div>

            <div className="flex flex-col space-y-2">
                <InputField
                    type="text"
                    id="name"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="flex flex-col space-y-2">
                <InputField
                    type="text"
                    id="phone"
                    placeholder="핸드폰 번호"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className="flex flex-col space-y-2">
                <InputField
                    type="date"
                    id="birthdate"
                    placeholder="생년월일"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
            </div>

            <Button text={"회원가입"} onClick={onSignup} />
        </div>
    );
};

export default SignupForm;