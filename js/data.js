import {gettingValue} from './util.js';
import {randomValueForUserId} from './util.js';
import {randomValueForUserUrl} from './util.js';
import {getRandomArrayElement} from './util.js';

const NUMBER_OF_PHOTO_BLOCKS = 25;

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

const craeteComments = function() {
  return {
    id: gettingValue(1, 1000),
    avatar: `img/avatar-${gettingValue(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENT_MESSAGE),
    name: getRandomArrayElement(USER_NAME),
  };
};

const commentArray = () => new Array(gettingValue(1, 25)).fill(null).map(() => craeteComments());

const createPhotoBlock = function() {
  return {
    id: randomValueForUserId(),
    url: `photos/${randomValueForUserUrl()}.jpg`,
    description: getRandomArrayElement(PHOTO_DISCRIPTION),
    likes: gettingValue(15, 200),
    comments: commentArray(),
  };
};

const photoBlocks = () => new Array(NUMBER_OF_PHOTO_BLOCKS).fill(null).map(() => createPhotoBlock());

const blockPhoto = photoBlocks();

export {blockPhoto};
