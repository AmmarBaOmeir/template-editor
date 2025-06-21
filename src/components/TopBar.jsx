import Avatar from "../atoms/Avatar";
import IconButton from "../atoms/IconButton";
import TextInput from "../atoms/TextInput";
import NotificationIcon from "../assets/notification.svg?react";
import LangIcon from "../assets/lang.svg?react";
import EmailIcon from "../assets/email.svg?react";
import ReportIcon from "../assets/report.svg?react";
import CalculatorIcon from "../assets/calculator.svg?react";
import SettingsIcon from "../assets/settings.svg?react";
import Logo from "../assets/logo-sm.svg?react";
import LaptopIcon from "../assets/laptop.svg?react";
import PropTypes from "prop-types";

const TopBar = ({ onSearch, showLogo }) => {
  return (
    <div className="w-full h-[64px] flex justify-between items-center bg-white rounded-[10px] mb-3 px-5">
      <div className="flex items-center gap-2 ">
        <Avatar />
        <IconButton type="secondary" icon={<NotificationIcon />} />
        <IconButton type="secondary" icon={<LangIcon />} />
        <IconButton type="secondary" icon={<EmailIcon />} />
        <IconButton type="secondary" icon={<ReportIcon />} />
        <IconButton type="secondary" icon={<CalculatorIcon />} />
        <IconButton type="secondary" icon={<SettingsIcon />} />
        <IconButton type="secondary" icon={<LaptopIcon />} />
      </div>
      {onSearch && (
        <div>
          <TextInput placeholder="بحث" onChange={onSearch} />
        </div>
      )}
      {showLogo && <Logo />}
    </div>
  );
};

TopBar.prototype = {
  onSearch: PropTypes.func,
  showLogo: PropTypes.bool,
};

export default TopBar;
