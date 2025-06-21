import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import Typography from "../../atoms/Typography";
import IconButton from "../../atoms/IconButton";
import EmptyImg from "../../assets/emptyImg.svg?react";
import TrashIcon from "../../assets/trash.svg?react";
import ExportIcon from "../../assets/export.svg?react";
import CopyIcon from "../../assets/copy.svg?react";
import EditIcon from "../../assets/edit.svg?react";
import { useEditorStore } from "../../store/useEditorStore";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const {
    editor: { templates, setTemplates },
  } = useEditorStore();
  const fillButtonStyle = "w-full flex justify-center items-center";
  const imageSrc = data.page?.bg_image ?? EmptyImg;

  const onDeleteClick = () => {
    const restTemplates = templates.filter(
      (template) => template.id !== data.id
    );
    setTemplates(restTemplates);
    toastr.success(` بنجاح ${data.page.title} تم حذف القالب `);
  };
  const onEditClick = () => {
    navigate(`/editor/${data.id}`);
  };

  return (
    <div className="w-[364px] h-[355px] bg-white border border-[#E5E7EB] rounded-[10px] p-4 gap-1 flex flex-col">
      <div className="flex justify-center items-center w-[332px] p-4 h-[194px] object-cover border border-[#E5E7EB] rounded-[10px] overflow-auto ">
        <img src={imageSrc} alt="image" className="rounded-[10px] object-cover py-4" />
      </div>
      <Typography text={data.page?.title} size={18} />
      <Typography
        text="أمر قبض"
        size={16}
        color="#71717B"
        className="pb-4 border-b border-[#E5E7EB]"
      />
      <div className="flex justify-evenly items-center mt-2 gap-2">
        <IconButton
          type="danger"
          icon={<TrashIcon />}
          className={fillButtonStyle}
          onClick={onDeleteClick}
        />
        <IconButton
          type="secondary"
          icon={<ExportIcon />}
          className={fillButtonStyle}
        />
        <IconButton
          type="secondary"
          icon={<CopyIcon />}
          className={fillButtonStyle}
        />
        <IconButton
          type="secondary"
          icon={<EditIcon />}
          className={fillButtonStyle}
          onClick={onEditClick}
        />
      </div>
    </div>
  );
};

Card.prototype = {
  data: PropTypes.elementType.isRequired,
};

export default Card;
