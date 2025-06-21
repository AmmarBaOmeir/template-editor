import PropTypes from "prop-types";
import TrashIcon from "../../assets/trash.svg?react";
import LockIcon from "../../assets/lock.svg?react";
import Typography from "../../atoms/Typography";
import IconButton from "../../atoms/IconButton";

const Element = ({
  icon,
  text,
  subText,
  onDelete,
  onLock,
  editable,
  className,
}) => {
  return (
    <div className={`w-full flex justify-between items-center ${className}`}>
      {editable && (
        <div className="flex items-center gap-2">
          {onDelete && (
            <IconButton
              icon={<TrashIcon />}
              type="danger"
              className="!bg-white border-0"
              onClick={onDelete}
            />
          )}
          {onLock && (
            <IconButton
              icon={<LockIcon />}
              type="secondary"
              className="!bg-white border-0"
              onClick={onLock}
            />
          )}
        </div>
      )}
      <div className="flex items-center justify-end gap-2 w-full p-2">
        <div>
          <Typography text={text} size={18} />
          <Typography text={subText} size={16} color="#71717B" />
        </div>
        <div className="w-10 h-10 rounded-[10px] bg-[#D3DBE4] flex justify-center items-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

Element.prototype = {
  icon: PropTypes.node,
  text: PropTypes.string,
  subText: PropTypes.string,
  onDelete: PropTypes.func,
  onLock: PropTypes.func,
  editable: PropTypes.bool,
  className: PropTypes.string,
};

export default Element;
