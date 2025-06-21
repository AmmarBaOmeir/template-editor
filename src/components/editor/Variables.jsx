import PropTypes from "prop-types";
import { useDraggable } from "@dnd-kit/core";
import Element from "./Element";
import DollarIcon from "../../assets/dollar.svg?react";
import NumberIcon from "../../assets/number.svg?react";
import DateIcon from "../../assets/date.svg?react";
import TextIcon from "../../assets/text.svg?react";
import ImageIcon from "../../assets/image.svg?react";

const DragableElement = ({ element }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: `tool-${element.type}`,
    data: element,
  });

  return (
    <div
      className="w-full cursor-grab"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <Element
        icon={element.icon}
        text={element.text}
        subText={element.subText}
      />
    </div>
  );
};

DragableElement.prototype = {
  element: {
    icon: PropTypes.node,
    text: PropTypes.string,
    subText: PropTypes.string,
    type: PropTypes.oneOf(["text", "number", "amount", "date", "image"]),
  },
};
const Variables = () => {
  const variables = [
    {
      id: "number",
      icon: <NumberIcon />,
      text: "أمر قبض رقم",
      subText: "حقل رقم",
      type: "number",
    },
    {
      id: "amount",
      icon: <DollarIcon />,
      text: "المبلغ",
      subText: "حقل عملة",
      type: "amount",
    },
    {
      id: "image",
      icon: <ImageIcon />,
      text: "الشعار",
      subText: "حقل صورة",
      type: "image",
    },
    {
      id: "date",
      icon: <DateIcon />,
      text: "التاريخ",
      subText: "حقل تاريخ",
      type: "date",
    },
    {
      id: "text",
      icon: <TextIcon />,
      text: "اسم المستلم",
      subText: "حقل نص",
      type: "text",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start min-w-[337px] h-full">
      {variables.map((element) => (
        <DragableElement element={element} />
      ))}
    </div>
  );
};

export default Variables;
