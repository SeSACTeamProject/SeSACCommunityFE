const Button = ({ text, onClick, variant = "primary", disabled = false }) => {
  const baseStyle =
    // "w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer p-2";
    "w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer p-3";

  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white", // 기본
    kakao: "bg-yellow-400 hover:bg-yellow-500 text-black",
    naver: "bg-green-500 hover:bg-green-600 text-white",
    signup: "bg-gray-500 hover:bg-gray-600 text-white",
  };

  const disabledStyles = "bg-gray-400 cursor-not-allowed opacity-50 text-white"

  return (
    <button
      className={`${baseStyle} ${disabled ? disabledStyles : variantStyles[variant]} hover:cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
