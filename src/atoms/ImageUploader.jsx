import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ImageIcon from "../assets/image.svg?react";

const ImageUploader = ({ onImageSelect, defaultImage }) => {
  const [image, setImage] = useState(null);
  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      onImageSelect(base64);
    };
    reader.readAsDataURL(file);
    previewImage(file);
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (defaultImage) {
      setImage(defaultImage);
    }
  }, [defaultImage]);

  return (
    <label
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full max-w-md h-48 border border-dashed border-blue-400 bg-gray-50 rounded-lg
      flex flex-col items-center justify-center cursor-pointer px-4 text-center"
    >
      {image ? (
        <img
          src={image}
          alt="Preview"
          className="h-full object-cover rounded-md"
        />
      ) : (
        <>
          <ImageIcon className="mb-3" />
          <p className="text-sm text-gray-600">
            اضغط هنا لرفع الصورة أو قم بالسحب والإفلات
          </p>
          <p className="text-xs text-gray-400 mt-1">
            لا تتجاوز 5MB JPG أو PNG أو SVG.
          </p>
        </>
      )}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </label>
  );
};

ImageUploader.prototype = {
  onImageSelect: PropTypes.func.isRequired,
  defaultImage: PropTypes.string,
};

export default ImageUploader;
