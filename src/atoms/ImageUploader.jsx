import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
          <svg
            className="w-8 h-8 text-gray-400 mb-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16.5 12.5L12 8m0 0l-4.5 4.5M12 8v13"
            />
          </svg>
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
