const InputField = ({ type, id, placeholder, onChange, value }) => {
    return(
        <input 
            type={type}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            // className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
};

export default InputField;