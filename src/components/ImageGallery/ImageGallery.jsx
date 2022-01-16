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
  items: propTypes.array,
};

export default ImageGallery;