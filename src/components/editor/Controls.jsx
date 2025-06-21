import { useState } from "react";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import { useEditorStore } from "../../store/useEditorStore";
import IconButton from "../../atoms/IconButton";
import DeleteIcon from "../../assets/x.svg?react";
import SaveIcon from "../../assets/save.svg?react";
import ViewIcon from "../../assets/view.svg?react";
import PenIcon from "../../assets/pen.svg?react";
import UndoIcon from "../../assets/undo.svg?react";
import RedoIcon from "../../assets/redo.svg?react";
import ExportModal from "./ExportModal";

const Controls = ({ schema, undo, redo, canUndo, canRedo }) => {
  const navigate = useNavigate();
  const {
    editor: { templates, setTemplates },
  } = useEditorStore();

  const [exportModal, setExportModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const handlePreview = async () => {
    const canvasElement = document.getElementById("canvas");
    if (!canvasElement) return;

    const canvas = await html2canvas(canvasElement);
    const dataURL = canvas.toDataURL("image/png");
    setPreviewImage(dataURL);
    setExportModal(true);
  };

  const handleSave = async () => {
    if (Object.keys(schema).length === 0 || !schema.page?.title) {
      return toastr.warning("حقل العنوان اجباري");
    }
    if (!templates.length) {
      setTemplates([{ ...schema, id: crypto.randomUUID() }]);
      toastr.success("تم انشاء القالب بنجاح");
      return navigate("/templates");
    }

    if (schema.id == "new") {
      setTemplates([...templates, { ...schema, id: crypto.randomUUID() }]);
      toastr.success("تم انشاء القالب بنجاح");
      return navigate("/templates");
    }

    const templateList = await templates.map((template) => {
      // in case of update template
      if (template.id === schema.id) {
        return schema;
      }
      // no change in other templates
      return template;
    });

    await setTemplates(templateList);
    toastr.success("تم انشاء القالب بنجاح");
    navigate("/templates");
  };

  const handleDelete = async () => {
    const templateList = await templates.filter(
      (template) => template.id !== schema.id
    );
    await setTemplates(templateList);
    toastr.success(` بنجاح ${schema.page.title} تم حذف القالب `);
    navigate("/templates");
  };

  return (
    <>
      <div className="z-[100] flex items-center gap-2.5 bg-white rounded-[10px] py-1.5 px-5">
        <IconButton
          icon={<DeleteIcon />}
          type="danger"
          onClick={handleDelete}
        />
        <IconButton icon={<SaveIcon />} type="primary" onClick={handleSave} />
        <IconButton
          icon={<ViewIcon />}
          type="secondary"
          onClick={() => handlePreview(true)}
        />
        <IconButton icon={<PenIcon />} type="primary" />
        <IconButton
          icon={<UndoIcon />}
          type="secondary"
          onClick={undo}
          disabled={!canUndo}
          title="Undo last action"
        />
        <IconButton
          icon={<RedoIcon />}
          type="secondary"
          onClick={redo}
          disabled={!canRedo}
          title="Redo last action"
        />
      </div>
      <ExportModal
        open={exportModal && previewImage}
        onClose={() => setExportModal(false)}
        previewImage={previewImage}
        schema={schema}
      />
    </>
  );
};

export default Controls;
