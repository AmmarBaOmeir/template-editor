import { useRef, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Rnd } from "react-rnd";
import toastr from "toastr";
import Logo from "../../assets/logo.svg?react";
import TrashIcon from "../../assets/trash.svg?react";
import CopyIcon from "../../assets/copy.svg?react";
import IconButton from "../../atoms/IconButton";
import Typography from "../../atoms/Typography";

const Canvas = ({ width, height, schema, setSchema }) => {
  const { setNodeRef } = useDroppable({ id: "canvas" });
  const [resizingId, setResizingId] = useState(null);

  const nodeRef = useRef(null);

  const handleCanvasClick = (e, id) => {
    e.stopPropagation();
    setSchema({
      ...schema,
      selectedId: id,
    });
  };

  const handleDelete = ({ id, props }) => {
    const updatedElements = schema.elements?.filter((el) => el.id !== id);
    setSchema({
      ...schema,
      elements: updatedElements,
      selectedId: null,
    });
    toastr.success(` بنجاح ${props.text} تم حذف العنصر `);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toastr.success(` بنجاح ${text} تم نسخ النص `);
  };

  const handleTextChange = (e, id) => {
    const newText = e.target?.innerText ?? "";
    setSchema({
      ...schema,
      elements: schema.elements.map((el) =>
        el.id === id ? { ...el, props: { ...el.props, text: newText } } : el
      ),
    });
  };

  return (
    <div
      ref={setNodeRef}
      className="relative w-full h-full bg-white rounded-[20px]"
      style={{ width, height, background: schema.page?.background }}
      id="canvas"
      onClick={() => setSchema({ ...schema, selectedId: undefined })}
    >
      {!!schema.elements &&
        schema.elements.map((el) => (
          <Rnd
            default={{
              x: el.position.x,
              y: el.position.y,
              width: "auto",
              height: "auto",
            }}
            bounds="parent"
            className="text-[#62748E] rounded-[6px] cursor-pointer p-2.5 focus:border focus:bg-white focus:border-[#34AAFC]"
            onResizeStart={() => setResizingId(el.id)}
            onResizeStop={() => setResizingId(null)}
          >
            {el.id === schema.selectedId && (
              <div className="flex justify-between items-end w-full gap-2 py-0">
                <div className="flex gap-1 items-center">
                  <IconButton
                    icon={<TrashIcon className="w-3 h-3 fill-white" />}
                    className="!bg-[#34AAFC] w-6 h-6 !p-0 flex items-center justify-center rounded-b-none rounded-r-none border-none"
                    onClick={() => {
                      setTimeout(() => {
                        handleDelete(el);
                      }, 50);
                    }}
                  />
                  <IconButton
                    icon={<CopyIcon className="w-3 h-3 fill-white" />}
                    className="!bg-[#34AAFC] w-6 h-6 !p-0 flex items-center justify-center rounded-none border-none"
                    onClick={() => handleCopy(el.props.text)}
                  />
                </div>
                <div className="bg-[#34AAFC] rounded-r-[6px] rounded-b-none py-0 px-1.5">
                  <Typography
                    text={el.props.subText}
                    className="!text-white text-nowrap"
                  />
                </div>
              </div>
            )}
            <div
              key={el.id}
              ref={nodeRef}
              onClick={(e) => {
                handleCanvasClick(e, el.id);
              }}
              contentEditable={!["image"].includes(el.type)}
              suppressContentEditableWarning
              onBlur={(e) => {
                setTimeout(() => {
                  handleTextChange(e, el.id);
                }, 1);
              }}
              className={`bg-transparent focus:border border-[#34AAFC] rounded-b-[6px] p-2.5 outline-0
                ${
                  el.id === resizingId &&
                  "border border-dashed border-[#34AAFC]"
                }`}
            >
              {el.type === "image" ? <Logo /> : el.props.text || "✏️"}
            </div>
          </Rnd>
        ))}
    </div>
  );
};

export default Canvas;
