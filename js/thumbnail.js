import { getPhotos } from './data.js';
import { renderPopup } from './download-photo.js';

const photos = getPhotos();
const containerPhotos = document.querySelector('.pictures');
const templateWrapper = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта
const template = templateWrapper.querySelector('a'); // В фрагменте находим нужный элемент
const fragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const a = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
  a.querySelector('.picture__img').src = photo.url;
  a.querySelector('.picture__comments').textContent = photo.comments.length;
  a.querySelector('.picture__likes').textContent = photo.likes;
  // a.children[0].src = photo.url;
  // a.children[1].children[0].textContent = photo.comments.length; // Записываем содержимое
  // a.children[1].children[1].textContent = photo.likes;
  a.onclick = function (evt) {
    evt.preventDefault;
    renderPopup(photo);
  };
  fragment.appendChild(a);
});

containerPhotos.appendChild(fragment);


