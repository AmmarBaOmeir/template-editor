import PropTypes from "prop-types";

const ExportModal = ({ open, onClose, previewImage, schema }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[20px]"
        style={{
          width: "60vw",
          height: "60vh",
          background: schema.page?.background,
          overflow: 'auto'
        }}
      >
        <img
          src={previewImage}
          alt="Canvas Preview"
          className="max-w-full h-full rounded-[20px]"
        />
      </div>
    </div>
  );
};

ExportModal.prototype = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default ExportModal;
