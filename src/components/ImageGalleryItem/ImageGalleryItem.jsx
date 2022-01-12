import { Component } from "react";
import Modal from "../Modal";
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import propTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <GalleryItem>
        <GalleryItemImage
          onClick={this.toggleModal}
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
        {this.state.showModal && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            toggleModal={this.toggleModal}
            alt={this.props.tags}
          />
        )}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  showModal: propTypes.bool,
  onClick: propTypes.func,
  src: propTypes.string,
  alt: propTypes.string,
  largeImageURL: propTypes.string,
  toggleModal: propTypes.func,
};