import PropTypes from "prop-types";

const Typography = ({
  size = 16,
  weight = 400,
  text,
  color = "#181D27",
  className = "",
  style,
}) => {
  return (
    <p
      className={className}
      style={{
        fontSize: size,
        fontWeight: weight,
        color,
        ...style,
      }}
    >
      {text}
    </p>
  );
};

Typography.prototype = {
  text: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.number,
  className: PropTypes.string,
};

export default Typography;
