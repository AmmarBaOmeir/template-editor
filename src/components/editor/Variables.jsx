import Element from "./Element";
import DollarIcon from "../../assets/dollar.svg?react";
import NumberIcon from "../../assets/number.svg?react";
import DateIcon from "../../assets/date.svg?react";
import TextIcon from "../../assets/text.svg?react";
import ImageIcon from "../../assets/image.svg?react";

const Variables = () => {
  const variables = [
    { icon: <NumberIcon />, text: "أمر قبض رقم", subText: "حقل رقم" },
    { icon: <DollarIcon />, text: "المبلغ", subText: "حقل عملة" },
    { icon: <ImageIcon />, text: "الشعار", subText: "حقل صورة" },
    { icon: <DateIcon />, text: "التاريخ", subText: "حقل تاريخ" },
    { icon: <TextIcon />, text: "اسم المستلم", subText: "حقل نص" },
  ];
  return (
    <div className="flex flex-col items-start justify-start w-[337px] h-full">
      {variables.map((element) => (
        <Element
          icon={element.icon}
          text={element.text}
          subText={element.subText}
        />
      ))}
    </div>
  );
};

export default Variables;
