import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalStyle } from './Modal.styled';
import propTypes from "prop-types";

const modalRoot = document.getElementById('modal-root');

function Modal ({toggleModal, largeImageURL, tags}) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  const handleBackdropClick = (e) => {
    const clickedOnBackdrop = e.currentTarget === e.target;
    if (clickedOnBackdrop) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyle>
        <img src={largeImageURL} alt={tags} />
      </ModalStyle>
    </Overlay>,  
    modalRoot
  );
}

Modal.propTypes = {
  toggleModal: propTypes.func,
  largeImageURL: propTypes.string,
  tags: propTypes.string,
};

export default Modal;