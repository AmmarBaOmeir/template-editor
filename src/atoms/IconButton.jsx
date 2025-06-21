import PropTypes from "prop-types";
import { typeBgColors, typeBorderColors, typeForeColors } from "./const";
import Styles from "./style.module.css";

const IconButton = ({
  icon,
  type = "primary",
  onClick,
  className,
  disabled,
  title,
}) => {
  return (
    <button
      className={`cursor-pointer active:opacity-60 hover:opacity-80 rounded-[10px] p-2.5 border disabled:cursor-not-allowed disabled:opacity-50 ${
        Styles[`${type}IconButton`]
      } ${className}`}
      style={{
        borderColor: typeBorderColors[type],
        backgroundColor: typeBgColors[type],
        color: typeForeColors[type],
      }}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {icon}
    </button>
  );
};

IconButton.prototype = {
  icon: PropTypes.node,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  title: PropTypes.string,
};

export default IconButton;
