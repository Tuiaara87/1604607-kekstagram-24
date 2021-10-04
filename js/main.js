// Возвращение случайного числа

function getNumber(from, to) {
  let rand = from + Math.random() * (to + 1 - from);
  return Math.ceil(rand);
}
let number = getNumber(100, 200);
alert(number);


// Функция для проверки максимальной длины строки

function checkLength(line, maxLine) {
  if (line.length < maxLine) {
    console.log('Этот текст выведется в консоль, только если если строка проходит по длине');
    return true;
  } else {
    console.log('Этот текст выведется в консоль, только если если строка не проходит по длине');
    return false;
  }
}
checkLength('i learn java script', 10);
checkLength('i learn java script', 120);

// Генерация данных


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
]

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
// console.log(_);

const createMyFirstObject = (i) => {
  const randomDescriptionIndex = _.random(0, DESCRIPTIONS.length - 1);
  const randomNamesIndex = _.random(0, NAMES.length - 1);
  const randomMessagesIndex = _.random(0, MESSAGES.length - 1);
  const randomLikesIndex = _.random(15, 200);
  const randomCommentsIndex = _.random(0, 200);
  const randomAvatarIndex = _.random(1, 6);

  return {
    id: i,
    url: 'photos/' + i + '.jpg',
    avatar: 'img/avatar-' + i + '.svg',
    description: DESCRIPTIONS[randomDescriptionIndex],
    likes: randomLikesIndex,
    comments: [
      {
        id: randomCommentsIndex,
        avatar: 'img/avatar-' + randomAvatarIndex + '.svg',
        message: MESSAGES[randomMessagesIndex],
        name: NAMES[randomNamesIndex],
      },
    ],
  };
};
const photos = [];
for (let i = 1; i <= 25; i++) {
  const photo = createMyFirstObject(i);
  photos.push(photo);
};



