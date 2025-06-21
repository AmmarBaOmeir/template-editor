import { useRef } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Rnd } from "react-rnd";
import toastr from "toastr";
import Logo from "../../assets/logo.svg?react";
import TrashIcon from "../../assets/trash.svg?react";
import CopyIcon from "../../assets/copy.svg?react";
import IconButton from "../../atoms/IconButton";

const Canvas = ({ width, height, schema, setSchema }) => {
  const { setNodeRef } = useDroppable({ id: "canvas" });
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
              width: 120,
              height: "auto",
            }}
            bounds="parent"
            className="text-[#62748E] rounded-[6px] cursor-pointer p-2.5 focus:border focus:bg-white focus:border-[#34AAFC]"
          >
            {el.id === schema.selectedId && (
              <div className="flex gap-1 items-center ">
                <IconButton
                  icon={<TrashIcon className="w-3 h-3 fill-white" />}
                  className="!bg-[#34AAFC] w-6 h-6 !p-0 flex items-center justify-center"
                  onClick={() => {
                    setTimeout(() => {
                      handleDelete(el);
                    }, 50);
                  }}
                />
                <IconButton
                  icon={<CopyIcon className="w-3 h-3 fill-white" />}
                  className="!bg-[#34AAFC] w-6 h-6 !p-0 flex items-center justify-center"
                  onClick={() => handleCopy(el.props.text)}
                />
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
              className="bg-transparent border-0"
            >
              {el.type === "image" ? <Logo /> : el.props.text || "✏️"}
            </div>
          </Rnd>
        ))}
    </div>
  );
};

export default Canvas;
