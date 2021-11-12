// 1) убрать класс hidden у элемента .img-upload__overlay для того, чтобы появилось потенциальное фото
const uploadFile = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload');
const imgOverlay = imgUpload.querySelector('.img-upload__overlay');
uploadFile.addEventListener('change', () => {
  imgOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

// 3) написать код для задачи:
// - изменить масштаб фото

const scaleSmaller = imgUpload.querySelector('.scale__control--smaller');
const scaleBigger = imgUpload.querySelector('.scale__control--bigger');
const scaleInput = imgUpload.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');
scaleSmaller.addEventListener('click', () => {
  scaleInput.value -= 25;
  const scaleValue = scaleInput.value / 100;
  imgPreview.style.transform = `scale(${scaleValue})`;
});
// scaleSmaller.onclick = function () {
//   scaleInput.value -= 25;
//   const scaleValue = scaleInput.value / 100;
//   imgPreview.style.transform = `scale(${scaleValue})`;
// };
scaleBigger.addEventListener('click', () => {
  scaleInput.value += 25;
  const scaleValue = scaleInput.value / 100;
  imgPreview.style.transform = `scale(${scaleValue})`;
});

//   - применить одно из заранее заготовленных эффектов, выбрать глубину эффекта с помощью ползунка


const photoOriginal = document.querySelector('.effects__preview--none');
const photoChrome = document.querySelector('.effects__preview--chrome');
const photoSepia = document.querySelector('.effects__preview--sepia');
const photoMarvin = document.querySelector('.effects__preview--marvin');
const photoPhobos = document.querySelector('.effects__preview--phobos');
const photoHeat = document.querySelector('.effects__preview--heat');
let currentFilter = 'none';
const sliderElement = document.querySelector('.effect-level__slider');
const hashTag = document.querySelector('.text__hashtags');
const comments = document.querySelector('.text__description');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
  const value = unencoded[handle];
  if (currentFilter === 'chrome') {
    imgPreview.style.filter = `grayscale(${value})`;
  }
  if (currentFilter === 'sepia') {
    imgPreview.style.filter = `sepia(${value})`;
  }
  if (currentFilter === 'marvin') {
    imgPreview.style.filter = `invert(${value}%)`;
  }
  if (currentFilter === 'phobos') {
    imgPreview.style.filter = `blur(${value}px)`;
  }
  if (currentFilter === 'heat') {
    imgPreview.style.filter = `brightness(${value})`;
  }
});

photoOriginal.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--none');
  currentFilter = 'none';
});

photoChrome.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--chrome');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0.5,
    step: 0.1,
  });
  currentFilter = 'chrome';
});

photoSepia.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--sepia');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0.5,
    step: 0.1,
  });
  currentFilter = 'sepia';
});

photoMarvin.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--marvin');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 50,
    step: 1,
  });
  currentFilter = 'marvin';
});

photoPhobos.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--phobos');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 50,
    step: 1,
  });
  currentFilter = 'phobos';
});

photoHeat.addEventListener('click', () => {
  imgPreview.className = 'img-upload__preview';
  imgPreview.classList.add('effects__preview--heat');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 50,
    step: 1,
  });
  currentFilter = 'marvin';
});

// 4) Закрытие формы редактирования изображения производится либо нажатием на кнопку #upload-cancel,
// либо нажатием клавиши Esc. Элементу .img-upload__overlay возвращается класс hidden.
// У элемента body удаляется класс modal-open.

const closePopup = document.querySelector('.img-upload__cancel');
const closeWindow = function () {
  imgOverlay.classList.add('hidden'); // добавила класс, чтобы окно закрывалось
  document.body.classList.remove('modal-open'); // удалила класс modal-open, чтобы при закрытии попап сранится могла скроллиться
  uploadFile.value = ''; // очистила поле загрузки файла
  hashTag.value = '';
  comments.value = '';
};
closePopup.addEventListener('click', closeWindow); // при клике closeWindow закройся
const closeEsc = function (evt) {
  if (evt.key === 'Escape') { // при нажатии на клавишу esc окно закройся
    closeWindow();
  }
};
document.addEventListener('keyup', closeEsc);

//   5) добавить хеш-теги

hashTag.addEventListener('input', () => {
  let arrayHashTag = hashTag.value.split(' ');

  arrayHashTag.forEach((hash, index) => {
    if (hash[0] !== '#') {
      hashTag.setCustomValidity('хэш-тег начинается с символа #');
    }
    if (!hash.match(/(#[a-z0-9][a-z0-9\-_]*)/ig)) {
      hashTag.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;');
    }
    if (hash === '#') {
      hashTag.setCustomValidity('хеш-тег не может состоять только из одной решётки;');
    }
    if (hash.length > 20) {
      hashTag.setCustomValidity(`длина хештега ${hash} не должна быть больше 20`);
    }
    arrayHashTag[index] = hash.toLowerCase();
  });

  if (arrayHashTag.length > 5) {
    hashTag.setCustomValidity('нельзя указать больше пяти хэш-тегов;');
  }


  arrayHashTag = arrayHashTag.filter((item, index) => {
    if (index !== arrayHashTag.indexOf(item)) {
      hashTag.setCustomValidity(`${item} был введен дважды`);
      return true;
    } else {
      return false;
    }
  });
  hashTag.reportValidity();
});
hashTag.addEventListener('focus', () => {
  document.removeEventListener('keyup', closeEsc);
});
hashTag.addEventListener('blur', () => {
  document.addEventListener('keyup', closeEsc);
});

//   6) добавить текстовой комментарий

comments.addEventListener('click', () => {
  document.removeEventListener('keyup', closeEsc);
});
comments.addEventListener('blur', () => {
  document.addEventListener('keyup', closeEsc);
});

// 7) Реализуйте логику проверки так, чтобы, как минимум, она срабатывала при попытке отправить форму и не давала этого сделать,
//  если форма заполнена не по правилам.
