// / Генерация данных

import { getNumber } from './util.js';

const DESCRIPTIONS = [
  'музыка исцеляет мою душу',
  'люблю порядок во всем',
  'дорогу осилит идущий',
  'просто хороший день',
];

const NAMES = [
  'Саша',
  'Маша',
  'Шура',
  'Наташа',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const createMyFirstObject = (id) => {
  const randomDescriptionIndex = getNumber(0, DESCRIPTIONS.length - 1);
  const randomLikesCount = getNumber(15, 200);
  const comments = [];
  const randomQuantityComments = getNumber(1, 20);

  for (let index = 0; index < randomQuantityComments; index++) {
    const randomCommentsId = getNumber(0, 200);
    const randomAvatarIndex = getNumber(1, 6);
    const randomMessagesIndex = getNumber(0, MESSAGES.length - 1);
    const randomNamesIndex = getNumber(0, NAMES.length - 1);

    comments.push({
      id: randomCommentsId,
      avatar: `img/avatar-${randomAvatarIndex}.svg`,
      message: MESSAGES[randomMessagesIndex],
      name: NAMES[randomNamesIndex],
    });
  }

  return {
    id: id,
    url: `photos/${id}.jpg`,
    avatar: `img/avatar-${id}.svg`,
    description: DESCRIPTIONS[randomDescriptionIndex],
    likes: randomLikesCount,
    comments: comments,
  };
};

function getPhotos() {
  const photos = [];
  for (let index = 1; index <= 25; index++) {
    const photo = createMyFirstObject(index);
    photos.push(photo);
  }
  return photos;
}


function getComments() {
  const comments = [];
  for (let index = 1; index <= 25; index++) {
    const photo = createMyFirstObject(index);
    comments.push(photo);
  }
  return comments;
}

export { getPhotos };
export { getComments };
