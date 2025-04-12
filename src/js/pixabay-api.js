import axios from 'axios';

const API_KEY = '49643579-021fb679616bd716ef3622271';

export async function getImagesByQuery(query, page) {
  const response = await axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });

  return response.data;
}
