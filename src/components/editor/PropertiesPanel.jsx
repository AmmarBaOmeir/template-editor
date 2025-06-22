import ImageUploader from "../../atoms/ImageUploader";
import TextInput from "../../atoms/TextInput";
import Typography from "../../atoms/Typography";

const PropertiesPanel = ({ setSchema, schema }) => {
  const onSchemaUpdate = ({ key, value }) => {
    setSchema({
      ...schema,
      page: {
        ...schema.page,
        [key]: value,
      },
    });
  };

  return (
    <div className="min-w-[437px] max-w-[500px] h-full p-5 bg-white rounded-[20px] flex flex-col gap-5 col-span-1">
      <Typography text="خصائص القالب" size={20} weight={600} />

      <div className="relative h-[1px] w-full bg-[#E5E7EB]">
        <Typography
          text="عامة"
          size={16}
          weight={500}
          className="absolute -top-3.5 px-1 py-0.5 bg-white text-[#627D98]"
          style={{
            left: "calc(50% - 20px)",
          }}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 items-center w-full">
        <TextInput
          placeholder="العنوان"
          value={schema.page?.title}
          onChange={(event) =>
            onSchemaUpdate({ key: "title", value: event.target.value })
          }
          className="col-span-2"
        />
        <Typography text="العنوان" size={16} weight={400} />
        <TextInput
          placeholder="حجم الصفحة"
          value={schema.page?.size}
          onChange={(event) =>
            onSchemaUpdate({ key: "size", value: event.target.value })
          }
          className="col-span-2"
        />
        <Typography text="حجم الصفحة" size={16} weight={400} />
      </div>

      <div className="relative h-[1px] w-full bg-[#E5E7EB]">
        <Typography
          text="الصفحة"
          size={16}
          weight={500}
          className="absolute -top-3.5 px-1 py-0.5 bg-white text-[#627D98]"
          style={{
            left: "calc(50% - 20px)",
          }}
        />
      </div>
      <ImageUploader
        onImageSelect={(data) => {
          onSchemaUpdate({ key: "bg_image", value: data });
        }}
        {...(schema.page?.bg_image
          ? { defaultImage: schema.page?.bg_image }
          : {})}
      />
    </div>
  );
};

export default PropertiesPanel;
