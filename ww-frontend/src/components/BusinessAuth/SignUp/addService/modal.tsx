import { Fragment, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationEnd = () => {
    setIsAnimationComplete(true);
  };

  if (!isOpen && isAnimationComplete) {
    return null;
  }

  return (
    <Fragment>
      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        // onAnimationEnd={handleAnimationEnd}
        onClick={() => {
          onclose;
          console.log("first");
        }}
      />

      {/* Modal Body */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 ${
          isOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          className={`bg-white rounded-lg p-6 max-w-md w-full transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
          <button
            className="mt-4 bg-blue-500 text-white rounded py-2 px-4"
            onClick={onClose}
          >
            Close Modal
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
