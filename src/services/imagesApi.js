import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '24109020-be7a279fcfced9dd4ee1357c9',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

async function imagesApi(nextName, page) {
  try {
    const { data } = await axios.get(`?q=${nextName}&page=${page}`);
    return data;
  } catch (e) {
    throw e;
  }
}

export default imagesApi;
