import IconButton from "../../atoms/IconButton";
import DeleteIcon from "../../assets/x.svg?react";
import SaveIcon from "../../assets/save.svg?react";
import ViewIcon from "../../assets/view.svg?react";
import PenIcon from "../../assets/pen.svg?react";
import UndoIcon from "../../assets/undo.svg?react";
import RedoIcon from "../../assets/redo.svg?react";

const Controls = () => {
  return (
    <div className="flex items-center gap-2.5">
      <IconButton icon={<DeleteIcon />} type="danger" />
      <IconButton icon={<SaveIcon />} type="primary" />
      <IconButton icon={<ViewIcon />} type="secondary" />
      <IconButton icon={<PenIcon />} type="primary" />
      <IconButton icon={<UndoIcon />} type="secondary" />
      <IconButton icon={<RedoIcon />} type="secondary" />
    </div>
  );
};

export default Controls;
