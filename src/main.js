import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  lightbox,
  hideLoader,
  showLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = form.querySelector('input');
const btnLoadMore = document.querySelector('.btn-load-more');

form.addEventListener('submit', handleSubmit);
btnLoadMore.addEventListener('click', handleCLick);

let pageImg = 1;
let userRequest = '';
async function handleSubmit(event) {
  try {
    event.preventDefault();
    clearGallery();

    if (!input.value.trim().length) return;
    if (userRequest !== input.value) {
      pageImg = 1;
      //   console.log(page);
    }
    userRequest = input.value;

    showLoader();
    const data = await getImagesByQuery(input.value, pageImg);
    console.log(data);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      hideLoader();
      return;
    }
    createGallery(data.hits);
    lightbox.refresh();
    hideLoader();
    pageImg++;
    console.log(pageImg);
    showLoadMoreButton();
  } catch (error) {
    console.error(error.message);
  }
}

async function handleCLick() {
  try {
    hideLoadMoreButton();
    showLoader();
    const data = await getImagesByQuery(input.value, pageImg);
    createGallery(data.hits);
    pageImg++;
    lightbox.refresh();
    showLoadMoreButton();
    hideLoader();
    console.log(pageImg);
    console.log(userRequest);
  } catch (error) {
    console.error(error.message);
  }
}
// function handleSubmit(event) {
//   event.preventDefault();
//   clearGallery();

//   if (!input.value.trim().length) return;

//   showLoader();
//   getImagesByQuery(input.value, page)
//     .then(response => {
//       console.log(response.data);

//       if (response.data.hits.length === 0) return;

//       return response.data;
//     })
//     .then(response => {
//       const list = document.querySelector('.gallery');
//       createGallery(response.hits);
//       lightbox.refresh();
//     })
//     .catch(() => {
//       iziToast.error({
//         title: 'Error',
//         message:
//           'Sorry, there are no images matching your search query. Please try again!',
//         position: 'topRight',
//       });
//     })
//     .finally(() => {
//       hideLoader();
//     });
// }
