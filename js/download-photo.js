function renderPopup(photo) {
  // console.log(photo);

  const userDialog = document.querySelector('.big-picture'); // нашла элемент .big-picture

  document.onkeyup = function (evt) {
    if (evt.key === 'Escape') {
      userDialog.classList.add('hidden');
    }
  }; //  код для закрытия окна по нажатию клавиши Esc

  userDialog.classList.remove('hidden'); // удалила класс hidden у элемента .big-picture, чтобы отобразить блок

  const socialCommentCount = userDialog.querySelector('.social__comment-count'); // нашла элемент .social__comment-count

  socialCommentCount.classList.add('hidden'); // добавила элементу класс hidden, спрятать блоки счётчика комментариев

  const commentsLoader = userDialog.querySelector('.comments-loader'); // нашла элемент .comments-loader

  commentsLoader.classList.add('hidden'); // добавила элементу класс hidden, спрятать блоки счётчика комментариев

  document.body.classList.add('modal-open'); // доюавила кдасс modal-open чтобы контейнер с фотографиями позади не прокручивался при скролле.

  const fragment = document.createDocumentFragment(); //создала коробочку, куда потом все сложу

  const img = userDialog.querySelector('.big-picture__img img'); // нашла элемент .big-picture__img img

  img.src = photo.url; // подставила url

  const likes = userDialog.querySelector('.likes-count'); // нашла элемент .likes-count

  likes.textContent = photo.likes; // количество лайков подставила, как текстовое содержимое

  const comments = userDialog.querySelector('.comments-count');

  comments.textContent = photo.comments.length; // количество комментариев (длину) подставила, как текстовое содержимое элемента

  const description = userDialog.querySelector('.social__caption');

  description.textContent = photo.description; // опиание фотографии вставила строкой в блок

  photo.comments.forEach((comment) => {
    const commentsListItem = document.createElement('li'); // создала эдемент
    commentsListItem.classList.add('social__comment'); // добавила класс элементу
    commentsListItem.innerHTML =
      `<img class="social__picture"
    src="${comment.avatar}"
    alt="${comment.name}"
    width="35" height="35">
<p class="social__text">${comment.message}</p>`;
    fragment.appendChild(commentsListItem);
  });

  const socialComments = userDialog.querySelector('.social__comments');
  socialComments.innerHTML = '';
  socialComments.appendChild(fragment);
}
export { renderPopup };

