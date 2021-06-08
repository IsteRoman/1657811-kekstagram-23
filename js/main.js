const gettingValue = function(minValue, maxValue) {
  const min = Math.ceil(Math.min(Math.abs(minValue), Math.abs(maxValue)));
  const max = Math.floor(Math.max(Math.abs(minValue), Math.abs(maxValue)));

  return Math.floor(Math.random() * (max - min + 1) + min);
};

gettingValue();

const checkLenght = function (string, maxStringLenght) {
  return string.length <= maxStringLenght;
};

checkLenght();

const NUMBER_OF_PHOTO_BLOCKS = 25;
const NUMBER_OF_PHOTO_COMMENTS = 25;

const PHOTO_DISCRIPTION = [
  'Море',
  'Горы',
  'Пляж',
  'Еда',
  'Парк',
  'Я',
  'Пятница вечер',
  'Дети цветы жизни',
  'Взрослые игры',
  'А я иду такая вся ...',
  'Встреча с подружками',
];

const COMMENT_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const USER_NAME = [
  'Леся',
  'Максим',
  'Белка',
  'Киска',
  'Михаил',
  'Лидия',
];

const getRandomArrayElement = (elements) => { // eslint-disable-line
  return elements[gettingValue(0, elements.length - 1)]; // eslint-disable-line
}; // eslint-disable-line

const craeteComments = function() {
  return {
    userCommentId: gettingValue(1, 25),
    userCommentAvatar: 'img/avatar-' + gettingValue(1, 6) + '.svg', // eslint-disable-line
    userCommentMessage: getRandomArrayElement(COMMENT_MESSAGE),
    userCommentName: getRandomArrayElement(USER_NAME),
  };
};

const commentBlocks = new Array(NUMBER_OF_PHOTO_COMMENTS).fill(null).map(() => craeteComments());

const createPhotoBlock = function() {
  return {
    userId: gettingValue(1, 25),
    userUrl: 'photos/' + gettingValue(1, 25) + '.jpg', // eslint-disable-line
    userDescription: getRandomArrayElement(PHOTO_DISCRIPTION),
    userLikes: gettingValue(15, 200),
    userComment: getRandomArrayElement(commentBlocks),
  };
};

const photoBlocks = new Array(NUMBER_OF_PHOTO_BLOCKS).fill(null).map(() => createPhotoBlock());

photoBlocks();
