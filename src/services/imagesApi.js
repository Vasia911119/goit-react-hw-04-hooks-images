import axios from 'axios';
import propTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '24109020-be7a279fcfced9dd4ee1357c9',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

async function imagesApi(imageName, page) {
  try {
    const {
      data: { hits },
    } = await axios.get(`?q=${imageName}&page=${page}`);
    return hits;
  } catch (e) {
    throw e;
  }
}

imagesApi.propTypes = {
  imageName: propTypes.string,
  page: propTypes.number,
};

export default imagesApi;
