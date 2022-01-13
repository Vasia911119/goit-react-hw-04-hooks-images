import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Spinner from './components/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import imagesApi from './services/imagesApi';

function App() {
  const [imageName, setImageName] = useState('');
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!imageName) return;
    setLoading(true);
    const fetchImages = async () => {
      try {
        const data = await imagesApi(imageName, page);
        setItems(images => [...images, ...data]);
        if (page !== 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      } catch (e) {
        throw e;
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [page, imageName]);

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setItems([]);
    setPage(1);
  };

  const onBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="App">
      {loading && <Spinner />}
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery items={items} />
      {items.length > 0 && <Button onBtnClick={onBtnClick} />}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
export default App;
