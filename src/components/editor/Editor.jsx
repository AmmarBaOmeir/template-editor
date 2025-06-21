import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DndContext, DragOverlay, useDraggable } from "@dnd-kit/core";
import { snapCenterToCursor } from "@dnd-kit/modifiers";
import useUndo from "use-undo";
import PropertiesPanel from "./PropertiesPanel";
import ToolbarPanel from "./ToolbarPanel";
import Canvas from "./Canvas";
import Controls from "./Controls";
import Element from "./Element";
import { initialSchema } from "../../utils/const";
import { useParams } from "react-router-dom";
import { useEditorStore } from "../../store/useEditorStore";

const ActiveDragElement = ({ element }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: element.id,
    data: element,
    modifiers: [snapCenterToCursor],
  });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className="w-full">
      <Element
        icon={element.icon}
        text={element.text}
        subText={element.subText}
        className="cursor-grabbing"
      />
    </div>
  );
};

ActiveDragElement.prototype = {
  element: {
    icon: PropTypes.node,
    text: PropTypes.string,
    subText: PropTypes.string,
    type: PropTypes.oneOf(["text", "number", "amount", "date", "image"]),
  },
};

const Editor = () => {
  const { id: schemaId } = useParams();
  const {
    editor: { templates },
  } = useEditorStore();
  const [activeElement, setActiveElement] = useState(null);
  const [schemaState, { set: setSchema, undo, redo, canUndo, canRedo }] =
    useUndo({ ...initialSchema, id: schemaId ?? "new" });
  const schema = schemaState.present ?? {};

  const handleDragStart = (event) => {
    setActiveElement(event.active.data.current);
  };

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (!over || over.id !== "canvas") return;

    const newElement = {
      id: crypto.randomUUID(),
      type: active.data.current.type,
      position: {
        x: active.rect.current.translated.left,
        y: active.rect.current.translated.top - 100,
      },
      props: activeElement,
    };
    setActiveElement(null);
    setSchema({
      ...schema,
      elements: [...(schema.elements ?? []), newElement],
    });
  };

  useEffect(() => {
    if (schemaId) {
      const templateSchema = templates.find(
        (template) => template.id === schemaId
      );
      setSchema(templateSchema);
    }
  }, [schemaId, templates]);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex gap-8 px-5 py-6 bg-[#F4F3F4] w-full"
      style={{ height: 'calc(100vh - 75px)' }}
      >
        <PropertiesPanel setSchema={setSchema} schema={schema} />
        <div className="flex flex-col w-full items-center justify-center relative">
          <Canvas height="500px" setSchema={setSchema} schema={schema} />
          <DragOverlay>
            {activeElement ? (
              <ActiveDragElement element={activeElement} />
            ) : null}
          </DragOverlay>
        </div>
        <ToolbarPanel setSchema={setSchema} schema={schema} />

        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
          <Controls
            schema={schema}
            undo={undo}
            redo={redo}
            canUndo={canUndo}
            canRedo={canRedo}
          />
        </div>
      </div>
    </DndContext>
  );
};

export default Editor;
