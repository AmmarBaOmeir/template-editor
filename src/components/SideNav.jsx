import { useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg?react";
import HomeIcon from "../assets/home.svg?react";
import EmployeesIcon from "../assets/employees.svg?react";
import WalletIcon from "../assets/wallet.svg?react";
import ReportsIcon from "../assets/report.svg?react";
import Typography from "../atoms/Typography";
import SideNavItem from "../atoms/SideNavItem";

const SideNav = () => {
  const { pathname } = useLocation();
  const navs = [
    { icon: <HomeIcon />, text: "الرئيسية", active: pathname === "/templates" },
    { icon: <EmployeesIcon />, text: "قائمة الموظقين", active: false },
    { icon: <WalletIcon />, text: "النظام المالي", active: false },
    { icon: <ReportsIcon />, text: "قسم التقارير", active: false },
    { icon: <ReportsIcon />, text: "الطلبات", active: false },
    { icon: <WalletIcon />, text: "قياس الاداء", active: false },
    { icon: <ReportsIcon />, text: "الحوافز", active: false },
    { icon: <ReportsIcon />, text: "حساب الدوام", active: false },
    { icon: <WalletIcon />, text: "حساب الراتب", active: false },
    { icon: <EmployeesIcon />, text: "قائمة الموظقين", active: false },
    { icon: <WalletIcon />, text: "النظام المالي", active: false },
    { icon: <ReportsIcon />, text: "قسم التقارير", active: false },
    { icon: <ReportsIcon />, text: "الطلبات", active: false },
    { icon: <WalletIcon />, text: "قياس الاداء", active: false },
    { icon: <ReportsIcon />, text: "الحوافز", active: false },
    { icon: <ReportsIcon />, text: "حساب الدوام", active: false },
    { icon: <WalletIcon />, text: "حساب الراتب", active: false },
  ];

  return (
    <div
      className="flex flex-col gap-4 w-[310px] py-6 px-5 rounded-[20px] bg-white"
      style={{ height: "calc(100vh - 40px)" }}
    >
      <div className="flex flex-col items-center justify-center bg-[#F8F8F8] border border-[#E5E7EB] py-4 rounded-[10px]">
        <Logo />
        <Typography text="اسم الشركة سمارت لايف" />
      </div>
      <div className="h-[1px] bg-[#E5E7EB]" />
      <div className="relative h-[1px] w-full bg-[#E5E7EB]">
        <Typography
          text="الاكثر استخدام"
          size={16}
          weight={500}
          className="absolute -top-3.5 px-1 py-0.5 bg-white text-[#627D98]"
          style={{
            left: "calc(50% - 35px)",
          }}
        />
      </div>
      <div className="flex flex-col gap-3 overflow-auto">
      {navs.map((nav) => (
        <SideNavItem text={nav.text} icon={nav.icon} active={nav.active} />
      ))}
      </div>
    </div>
  );
};

export default SideNav;
