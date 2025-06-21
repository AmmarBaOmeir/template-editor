import Element from "./Element";
import toastr from "toastr";

const Elements = ({ schema, setSchema }) => {
  const handleDelete = (id) => {
    setSchema({
      ...schema,
      elements: schema.elements?.filter((el) => el.id !== id),
    });
    const element = schema.elements.find((el) => el.id === id);
    toastr.success(` بنجاح ${element.props.text} تم حذف العنصر `);
  };

  return (
    <div className="flex flex-col items-start justify-start min-w-[337px] h-full">
      {!!schema.elements &&
        schema.elements?.map((element) => (
          <Element
            icon={element.props.icon}
            text={element.props.text}
            subText={element.props.subText}
            onDelete={() => handleDelete(element.id)}
            editable
          />
        ))}
    </div>
  );
};

export default Elements;
