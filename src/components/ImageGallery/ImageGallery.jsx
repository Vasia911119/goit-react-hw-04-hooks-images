import ImageGalleryItem from "../ImageGalleryItem";
import { Gallery } from './ImageGallery.styled';
import propTypes from "prop-types";

function ImageGallery({ items }) {
  return (
    <Gallery>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  id: propTypes.number,
  webformatURL: propTypes.string,
  largeImageURL: propTypes.string,
  tags: propTypes.string,
  items: propTypes.array,
};

export default ImageGallery;