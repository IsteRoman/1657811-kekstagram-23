import {gettingValue} from './util.js';
import {randomValueNoRepeatArray1} from './util.js';
import {randomValueNoRepeatArray2} from './util.js';
import {randomValueNoRepeatArray3} from './util.js';
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
    userCommentId: randomValueNoRepeatArray1(),
    userCommentAvatar: `img/avatar-${gettingValue(1, 6)}.svg`,
    userCommentMessage: getRandomArrayElement(COMMENT_MESSAGE),
    userCommentName: getRandomArrayElement(USER_NAME),
  };
};

const commentBlocks = () => new Array(NUMBER_OF_PHOTO_BLOCKS).fill(null).map(() => craeteComments());

const createPhotoBlock = function() {
  return {
    userId: randomValueNoRepeatArray2(),
    userUrl: `photos/${randomValueNoRepeatArray3()}.jpg`,
    userDescription: getRandomArrayElement(PHOTO_DISCRIPTION),
    userLikes: gettingValue(15, 200),
    userComment: getRandomArrayElement(commentBlocks),
  };
};

const photoBlocks = () => new Array(NUMBER_OF_PHOTO_BLOCKS).fill(null).map(() => createPhotoBlock());

export {createPhotoBlock};
export {photoBlocks};
