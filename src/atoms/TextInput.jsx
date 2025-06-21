import PropTypes from "prop-types";

const TextInput = ({
  value,
  onChange,
  placeholder = "",
  id,
  className,
  ...props
}) => {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
          px-[16px] py-[10px] border border-[#E5E7EB] rounded-[10px]
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition
          bg-[#F8F8F8]
          text-gray-900
          ${className}
        `}
      {...props}
    />
  );
};

TextInput.prototype = {
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default TextInput;
