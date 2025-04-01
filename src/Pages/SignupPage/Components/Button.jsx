const Button = ({ text, onClick }) => {
  return (
    <button
      // className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
