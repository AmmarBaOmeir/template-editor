import Button from "../../atoms/Button";
import Elements from "./Elements";
import Variables from "./Variables";
import { useEditorStore } from "../../store/useEditorStore";

const ToolbarPanel = ({ setSchema, schema }) => {
  const {
    editor: { toolbarTab, setToolbarTab },
  } = useEditorStore();

  return (
    <div className="flex flex-col gap-6 min-w-[437px] max-w-[500px] h-full p-5 bg-white rounded-[20px]">
      <div className="flex items-center gap-2 bg-[#F8F8F8] border border-[#E5E7EB] rounded-[10px] py-2 px-4">
        <Button
          text="عناصر القالب"
          className="w-full border-none"
          onClick={() => setToolbarTab("elements")}
          type={toolbarTab === "elements" ? "primary" : "secondary"}
        />
        <Button
          text="المتغيرات"
          className="w-full border-none"
          onClick={() => setToolbarTab("variables")}
          type={toolbarTab === "variables" ? "primary" : "secondary"}
        />
      </div>

      <div>
        {toolbarTab === "elements" ? (
          <Elements schema={schema} setSchema={setSchema} />
        ) : (
          <Variables />
        )}
      </div>
    </div>
  );
};

export default ToolbarPanel;
