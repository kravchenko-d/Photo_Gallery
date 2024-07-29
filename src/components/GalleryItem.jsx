
import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

const GalleryItem = ({ photo }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="h-40 overflow-hidden flex items-center">
      <img
        src={`http://localhost:8055/assets/${photo.image}`}
        alt={photo.title}
        className="h-auto cursor-pointer"
        onClick={() => setModalIsOpen(true)}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Photo Modal"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        ariaHideApp={false}
      >
        <div className="bg-white p-4 rounded max-w-full max-h-full overflow-auto">
          <div
          onClick={() => setModalIsOpen(false)}
          className="flex justify-end"
          ><AiOutlineCloseCircle 
            className="text-2xl cursor-pointer"
          /></div>
          <img
            src={`http://localhost:8055/assets/${photo.image}`}
            alt={photo.title}
            className="mt-2 max-w-full max-h-screen"
          />
        </div>
      </Modal>
    </div>
  );
};

export default GalleryItem;
