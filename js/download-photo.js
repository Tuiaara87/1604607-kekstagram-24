const renderPopup = (photo) => {
  // console.log(photo);
  const userDialog = document.querySelector('.big-picture'); // нашла элемент .big-picture
  const closeButton = userDialog.querySelector('.big-picture__cancel'); // нашла класс, который закрывает модальное окно
  const closeWindow = function () {
    userDialog.classList.add('hidden'); // добавила класс, чтобы окно закрывалось
    document.body.classList.remove('modal-open'); // удалила класс modal-open, чтобы при закрытии попап сранится могла скроллиться
  };
  closeButton.addEventListener('click', () => {
    closeWindow();
  }); // при клике closeWindow закройся
  document.addEventListener('keyup', (evt) => {
    if (evt.key === 'Escape') { // при нажатии на клавишу esc окно закройся
      closeWindow();
    }
  });
  const setInfo = () => {
    const img = userDialog.querySelector('.big-picture__img img'); // нашла элемент .big-picture__img img
    img.src = photo.url; // подставила url
    const likes = userDialog.querySelector('.likes-count'); // нашла элемент .likes-count
    likes.textContent = photo.likes; // количество лайков подставила, как текстовое содержимое
    const comments = userDialog.querySelector('.comments-count');
    comments.textContent = photo.comments.length; // количество комментариев (длину) подставила, как текстовое содержимое элемента
    const description = userDialog.querySelector('.social__caption');
    description.textContent = photo.description; // описание фотографии вставила строкой в блок
  };
  setInfo();

  userDialog.classList.remove('hidden'); // удалила класс hidden у элемента .big-picture, чтобы отобразить блок
  const socialCommentCount = userDialog.querySelector('.social__comment-count'); // нашла элемент .social__comment-count
  socialCommentCount.classList.add('hidden'); // добавила элементу класс hidden, спрятать блоки счётчика комментариев
  const commentsLoader = userDialog.querySelector('.comments-loader'); // нашла элемент .comments-loader
  commentsLoader.classList.add('hidden'); // добавила элементу класс hidden, спрятать блоки счётчика комментариев
  document.body.classList.add('modal-open'); // добавила кдасс modal-open чтобы контейнер с фотографиями позади не прокручивался при скролле.
  const fragment = document.createDocumentFragment(); //создала коробочку, куда потом все сложу

  photo.comments.forEach((comment) => {
    const commentsListItem = document.createElement('li'); // создала эдемент
    commentsListItem.classList.add('social__comment'); // добавила класс элементу
    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = comment.avatar;
    img.alt = comment.name;
    img.width = 35;
    img.height = 35;
    const p = document.createElement('p');
    p.classList.add('social__text');
    p.textContent = comment.message;
    commentsListItem.appendChild(img);
    commentsListItem.appendChild(p);
    fragment.appendChild(commentsListItem);
  });

  const socialComments = userDialog.querySelector('.social__comments');
  socialComments.innerHTML = '';
  socialComments.appendChild(fragment);
};
export { renderPopup };
