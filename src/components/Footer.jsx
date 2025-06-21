import Logo from "../assets/logo.svg?react";
import Typography from "../atoms/Typography";

const Footer = () => {
  return (
    <div className="w-full h-[62px] flex justify-center bg-white rounded-[10px] my-5">
      <div className="flex items-center gap-2">
        <Logo />
        <Typography text="جميع الحقوق محفوظفة لدى" />
      </div>
    </div>
  );
};

export default Footer;
