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
const list = document.querySelector('.gallery');

form.addEventListener('submit', handleSubmit);
btnLoadMore.addEventListener('click', handleCLick);

let pageImg = 1;
let userRequest = '';
const perPage = 15;
hideLoadMoreButton();

async function handleSubmit(event) {
  try {
    event.preventDefault();
    clearGallery();

    if (!input.value.trim().length) return;
    if (userRequest !== input.value) {
      pageImg = 1;
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
    const totalPages = Math.ceil(data.totalHits / perPage);
    if (pageImg >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
    hideLoader();
    pageImg++;
  } catch (error) {
    console.error(error.message);
  }
}

async function handleCLick() {
  try {
    hideLoadMoreButton();
    if (pageImg > 1) {
      showLoader();
    }
    const data = await getImagesByQuery(input.value, pageImg);
    createGallery(data.hits);
    pageImg++;
    lightbox.refresh();

    const totalPages = Math.ceil(data.totalHits / perPage);
    if (pageImg >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
    hideLoader();
    const item = document.querySelector('.list-item');
    const sizeItem = item.getBoundingClientRect();
    console.log(sizeItem);
    window.scrollBy({
      behavior: 'smooth',
      top: sizeItem.height * 2,
    });
  } catch (error) {
    console.error(error.message);
  }
}
