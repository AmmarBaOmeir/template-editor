import TextInput from "../../atoms/TextInput";
import Typography from "../../atoms/Typography";

const PropertiesPanel = () => {
  return (
    <div className="w-[337px] h-full p-5 flex flex-col gap-5">
      <Typography text="خصائص القالب" size={20} weight={600} />

      <div className="relative h-[1px] w-full bg-[#627D98]">
        <Typography
          text="عامة"
          size={16}
          weight={500}
          className="absolute -top-3.5 px-1 py-0.5 bg-white"
          style={{
            left: "calc(50% - 20px)",
          }}
        />
      </div>
      <div className="flex justify-between items-center">
        <Typography text="العنوان" size={16} weight={400} />
        <TextInput placeholder="القالب رقم 123" />
      </div>
    </div>
  );
};

export default PropertiesPanel;
