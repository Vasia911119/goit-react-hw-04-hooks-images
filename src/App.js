import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from './components/ImageGallery';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import Spinner from './components/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import imagesApi from './services/imagesApi';

class App extends Component {
  state = {
    imageName: '',
    loading: false,
    items: [],
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;

    if (prevName !== nextName || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    this.setState({ loading: true });

    try {
      const result = await imagesApi(this.state.imageName, this.state.page);
      this.setState(prevState => ({
        items: [...prevState.items, ...result.hits],
      }));
      if (!this.state.items.length) {
        toast.error('photo is missing');
      }
    } catch (e) {
      throw e;
    } finally {
      this.setState({ loading: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName, items: [], page: 1 });
  };

  onBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        {this.state.loading && <Spinner />}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={items} />
        {this.state.items.length > 0 && <Button onBtnClick={this.onBtnClick} />}
        <ToastContainer theme="colored" />
      </div>
    );
  }
}
export default App;
