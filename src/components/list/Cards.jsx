import { useEditorStore } from "../../store/useEditorStore";
import Card from "./Card";

const Cards = () => {
  const {
    editor: { templates },
  } = useEditorStore();

  return <div className="flex items-center gap-4 flex-wrap w-full">
    {templates.map((template) => {
      return (
        <Card data={template} />
      );
    })}
  </div>;
};

export default Cards;
