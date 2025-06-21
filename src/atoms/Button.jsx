import PropTypes from "prop-types";
import { typeBgColors, typeBorderColors, typeForeColors } from "./const";

const Button = ({ text, type = "primary", onClick, className }) => {
  return (
    <button
      className={`cursor-pointer active:opacity-60 hover:opacity-80 rounded-[10px] p-2.5 border ${className}`}
      style={{
        borderColor: typeBorderColors[type],
        backgroundColor: typeBgColors[type],
        color: typeForeColors[type],
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.prototype = {
  text: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
};

export default Button;
