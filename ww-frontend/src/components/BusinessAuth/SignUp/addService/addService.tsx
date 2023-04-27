import { useState } from "react";
import { FiX, FiPlus, FiChevronRight } from "react-icons/fi";
import Modal from "./modal";

const AddServiceAuth = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <h2 className="text-xl font-medium">Start Adding Services</h2>
      <p className="text-xs text-gray-400">
        Add at least one service now. Later you can add more, edit details, and
        group services into categories.
      </p>
      <div className="flex justify-between border-b-2 border-gray-100 py-4">
        <span className="flex gap-3 items-center">
          <FiX color="gray" size={20} />
          <p className="text-gray-700">Tattoo</p>
          <p className="text-gray-700">Category</p>
        </span>
        <span className="flex gap-3 items-center">
          <p className="text-gray-600 text-sm">30min</p>
          <p>$300.00</p>
          <FiChevronRight color="gray" size={20} />
        </span>
      </div>
      <div className="flex justify-between border-b-2 border-gray-100">
        <span className="flex gap-3 items-center">
          {/* <button className="text-gray-500 text-2xl font-light">+</button> */}
          <FiPlus />
          <p className="text-gray-700">Add service</p>
        </span>
      </div>
      <button
        type="submit"
        className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow text-xs"
      >
        CONTINUE
      </button>
      <button
        className="bg-blue-500 text-white rounded py-2 px-4"
        onClick={handleOpenModal}
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-lg font-bold mb-4">Modal Title</h2>
        <p className="mb-4">Modal Content Goes Here</p>
      </Modal>
    </>
  );
};

export default AddServiceAuth;
