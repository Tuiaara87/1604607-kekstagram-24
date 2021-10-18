import { getPhotos } from './data.js';

const photos = getPhotos();

const containerPhotos = document.querySelector('#container-photos');

const templateWrapper = document.querySelector('#picture').content; // Находим фрагмент с содержимым темплейта

const template = templateWrapper.querySelector('a'); // В фрагменте находим нужный элемент

const fragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const a = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
  a.children[0].src = photo.url;
  a.children[1].children[0].textContent = photo.comments.length; // Записываем содержимое
  a.children[1].children[1].textContent = photo.likes;
  fragment.appendChild(a);
});

containerPhotos.appendChild(fragment);


