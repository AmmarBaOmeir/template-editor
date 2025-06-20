import PropTypes from "prop-types";

const Avatar = ({ src, alt = "", name, className = "" }) => {
  const fallback = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "👤";

  return (
    <div
      className={`
        inline-flex items-center justify-center bg-gray-200 text-gray-700 rounded-full overflow-hidden w-[44px] h-[44px]
        ${className}
      `}
      role="img"
      aria-label={alt || name || "Avatar"}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className="object-cover w-full h-full"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
};

Avatar.prototype = {
  src: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Avatar;
