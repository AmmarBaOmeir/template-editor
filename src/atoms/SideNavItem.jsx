import ChevronDown from "../assets/chevronDown.svg?react";
import Typography from "./Typography";

const SideNavItem = ({ icon, text, active }) => {
  return (
    <div
      className={`flex justify-between items-center cursor-pointer p-2 ${
        active && "bg-[#00579F] border rounded-[10px]"
      }`}
    >
      <ChevronDown
        style={{ color: "#62748E" }}
        className={`w-4 h-4 ${active && "!fill-white"}`}
      />
      <dvi className="flex gap-2.5">
        <Typography
          size={16}
          text={text}
          style={{ color: "#62748E" }}
          className={active && "!text-white"}
        />
        {icon}
      </dvi>
    </div>
  );
};

export default SideNavItem;
