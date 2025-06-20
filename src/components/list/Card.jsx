import PropTypes from "prop-types";
import Typography from "../../atoms/Typography";
import IconButton from "../../atoms/IconButton";
import EmptyImg from "../../assets/emptyImg.svg?react";
import TrashIcon from "../../assets/trash.svg?react";
import ExportIcon from "../../assets/export.svg?react";
import CopyIcon from "../../assets/copy.svg?react";
import EditIcon from "../../assets/edit.svg?react";

const Card = ({ ImageSrcComponent = EmptyImg }) => {
  const fillButtonStyle = "w-full flex justify-center items-center"
  return (
    <div className="w-[364px] h-[355px] bg-white border border-[#E5E7EB] rounded-[10px] p-4 gap-1 flex flex-col">
      <ImageSrcComponent
        className="flex justify-center items-center w-[332px] h-[194px] object-cover border border-[#E5E7EB] rounded-[10px] overflow-auto p-4"
      />
      <Typography text="نسخة من نسخة من سند قبض" size={18} />
      <Typography text="أمر قبض" size={16} color="#71717B" className="pb-4 border-b border-[#E5E7EB]" />
      <div className="flex justify-evenly items-center mt-2 gap-2">
        <IconButton type="danger" icon={<TrashIcon />} className={fillButtonStyle} />
        <IconButton type="danger" icon={<ExportIcon />} className={fillButtonStyle} />
        <IconButton type="danger" icon={<CopyIcon />} className={fillButtonStyle} />
        <IconButton type="danger" icon={<EditIcon />} className={fillButtonStyle} />
      </div>
    </div>
  );
};

Card.prototype = {
  ImageSrcComponent: PropTypes.elementType.isRequired
}

export default Card;
