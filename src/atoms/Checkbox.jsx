import { useCallback, useState } from "react";
import CheckMark from "../assets/check.svg?react";
import PropTypes from "prop-types";

const Checkbox = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const onCheckChange = useCallback(() => {
    setChecked(!checked);
    onChange(!checked);
  }, [checked, onChange]);

  return (
    <div
      onClick={onCheckChange}
      className={`flex items-center justify-center w-5 h-5 mr-2 rounded-[6px] border-2 cursor-pointer
        ${checked ? "border-[#00579F]" : "border-gray-400"}
      `}
    >
      {checked && <CheckMark className="w-3 h-3 text-white" />}
    </div>
  );
};

Checkbox.prototype = {
  onChange: PropTypes.func
}

export default Checkbox;
