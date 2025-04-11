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
// export function getImagesByQuery(query, page) {
//   return axios('https://pixabay.com/api/', {
//     params: {
//       key: API_KEY,
//       q: query,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       per_page: 15,
//     },
//   })
//     .then(response => {
//       console.log(response.data);

//       if (response.data.hits.length === 0) {
//         iziToast.error({
//           title: 'Error',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           position: 'topRight',
//         });
//         return;
//       }

//       return response.data;
//     })
//     .catch(() => {
//       iziToast.error({
//         title: 'Error',
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//       });
//     });
// }
