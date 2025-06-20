import Element from "./Element";
import DollarIcon from "../../assets/dollar.svg?react";
import NumberIcon from "../../assets/number.svg?react";
import DateIcon from "../../assets/date.svg?react";
import TextIcon from "../../assets/text.svg?react";
import ImageIcon from "../../assets/image.svg?react";

const Elements = () => {
  const elements = [
    { id: 1, icon: <NumberIcon />, text: "أمر قبض رقم", subText: "حقل رقم" },
    { id: 2, icon: <DollarIcon />, text: "المبلغ", subText: "حقل عملة" },
    { id: 3, icon: <ImageIcon />, text: "الشعار", subText: "حقل صورة" },
    { id: 4, icon: <DateIcon />, text: "التاريخ", subText: "حقل تاريخ" },
    { id: 5, icon: <TextIcon />, text: "اسم المستلم", subText: "حقل نص" },
  ];
  return (
    <div className="flex flex-col items-start justify-start w-[337px] h-full">
      {elements.map((element) => (
        <Element
          icon={element.icon}
          text={element.text}
          subText={element.subText}
          onDelete={() => console.log(`Delete ${element.text}`)}
          editable
        />
      ))}
    </div>
  );
};

export default Elements;
