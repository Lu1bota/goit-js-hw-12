import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const fragment = document.createDocumentFragment();
const list = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.btn-load-more');

loader.classList.remove('loader');

export function createGallery(images) {
  images.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerHTML = `
  <div class="image-container">
    <a class="item-link" href="${item.largeImageURL}">
    <img
      class="gallery-image"
      src="${item.webformatURL}"
      alt="${item.tags}"
    />
  </a>
  </div>
  <div class="container-item">
  <div class="container-follow">
  <strong>Likes</strong>
  <span>${item.likes}</span>
  </div>
  <div class="container-follow">
  <strong>Views</strong>
  <span>${item.views}</span>
  </div>
  <div class="container-follow">
  <strong>Comments</strong>
  <span>${item.comments}</span>
  </div>
  <div class="container-follow">
  <strong>Downloads</strong>
  <span>${item.downloads}</span>
  </div>
  </div>`;
    fragment.append(li);
  });

  list.append(fragment);
}

export let lightbox = new SimpleLightbox('.item-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function clearGallery() {
  list.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('loader');
}

export function hideLoader() {
  loader.classList.remove('loader');
}

export function showLoadMoreButton() {
  btnLoadMore.hidden = false;
  btnLoadMore.classList.add('btn-load-more');
}

export function hideLoadMoreButton() {
  btnLoadMore.hidden = true;
  btnLoadMore.classList.remove('btn-load-more');
}
