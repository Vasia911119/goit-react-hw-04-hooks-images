import { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, ModalStyle } from './Modal.styled';
import propTypes from "prop-types";

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = (e) => {
    const clickedOnBackdrop = e.currentTarget === e.target;
    if (clickedOnBackdrop) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalStyle>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </ModalStyle>
      </Overlay>,  
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClick: propTypes.func,
  src: propTypes.string,
  alt: propTypes.string,
};