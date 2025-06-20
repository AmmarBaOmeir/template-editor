import ChevronDown from "../assets/chevronDown.svg?react";

const SideNavItem = ({ icon, text, active }) => {
  return (
    <div
      className={`flex justify-between ${
        active && "bg-[#00579F] border rounded-[10px]"
      }`}
    >
      <dvi className="flex gap-1.5">
        {icon}
        {text}
      </dvi>

      <ChevronDown className="w-4 h-4" />
    </div>
  );
};

export default SideNavItem;
