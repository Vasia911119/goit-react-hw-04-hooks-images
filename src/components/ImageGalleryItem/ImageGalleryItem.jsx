import { useState } from "react";
import Modal from "../Modal";
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import propTypes from "prop-types";

 function ImageGalleryItem({webformatURL, tags, largeImageURL}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <GalleryItem>
      <GalleryItemImage
        onClick={toggleModal}
        src={webformatURL}
        alt={tags}
      />
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          toggleModal={toggleModal}
          alt={tags}
        />
      )}
    </GalleryItem>
  )
}

ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string,
  tags: propTypes.string,
  largeImageURL: propTypes.string,
};

export default ImageGalleryItem;