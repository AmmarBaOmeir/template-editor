import { useState } from "react";
import ChevronDown from "../assets/chevronDown.svg?react";
import PropTypes from "prop-types";

const SelectInput = ({ label = "Choose option", options = [], onChange }) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-64">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-2 text-left border rounded-md bg-white text-gray-800 flex items-center justify-between"
      >
        <span>{selected || label}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full border rounded-md bg-white shadow-md max-h-60 overflow-auto">
          {options.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(item);
                onChange(item);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SelectInput.prototype = {
  label: PropTypes.string,
  options: PropTypes.shape(),
  onChange: PropTypes.func,
};

export default SelectInput;
