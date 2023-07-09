import React, { useEffect } from "react";
import Modal from "react-modal";
import SingleBlog from "./SingleBlog";
import { AiFillCloseCircle } from "react-icons/ai";

const InfoModal = ({ closeModal, isOpen, item }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
  
    },
  };

  useEffect(() => {
    Modal.setAppElement("#main");
  });
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc
      
    >
      <div>
        <section className="flex justify-end text-lg text-black">
          <AiFillCloseCircle onClick={() => closeModal()} />
        </section>
        <div
          className="flex flex-col p-4 bg-gray-500 rounded-lg mt-4"
          id="main"
        >
          <h2 className="text-4xl text-[#B2DFEE]">{item?.title}</h2>
          <div className="flex flex-col py-2">
            <p className="text-xl text-white">{item?.content}</p>
            <p className="opacity-40 text-sm text-white">{item?.time}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InfoModal;
