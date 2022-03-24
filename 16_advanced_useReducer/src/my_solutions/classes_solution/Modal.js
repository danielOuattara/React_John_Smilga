import React, { useEffect } from "react";

const Modal = ({ modalContent, closingModal, isModalOPen }) => {
  useEffect(() => {
    setTimeout(() => {
      closingModal();
    }, 2000);
  }, [closingModal]);

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
