import {debounce} from './util.js';
import { browse } from './watch.js';

const buttonDefault = document.querySelector('#filter-default');
const buttonRandom = document.querySelector('#filter-random');
const buttonDiscussed = document.querySelector('#filter-discussed');

const overlayFilter = (userPhotos) => {
  browse(userPhotos);

  const userPhotosNewArray = userPhotos.slice();

  const removerClass = () => {
    buttonDefault.classList.remove('img-filters__button--active');
    buttonRandom.classList.remove('img-filters__button--active');
    buttonDiscussed.classList.remove('img-filters__button--active');
  };

  const clickDefault = () => {
    const getDefault = () => {
      browse(userPhotosNewArray);
    };
    buttonDefault.addEventListener('click', () => {
      removerClass();
      buttonDefault.classList.add('img-filters__button--active');
    });
    buttonDefault.addEventListener('click', debounce(getDefault));
  };

  const clickRandom = () => {
    const getRandon  = () => {
      userPhotos.sort(() => Math.random() - 0.5);
      const userPhotosMix = userPhotos.slice(0, 9);
      browse(userPhotosMix);
    };

    buttonRandom.addEventListener('click', () => {
      removerClass();
      buttonRandom.classList.add('img-filters__button--active');
    });
    buttonRandom.addEventListener('click', debounce(getRandon));
  };

  const clickDiscussed = () => {
    const getDiscussed = function() {
      userPhotos.sort((a, b) => b.comments.length - a.comments.length);
      browse(userPhotos);
    };
    buttonDiscussed.addEventListener('click', () => {
      removerClass();
      buttonDiscussed.classList.add('img-filters__button--active');
    });
    buttonDiscussed.addEventListener('click', debounce(getDiscussed));
  };

  clickDefault();
  clickRandom();
  clickDiscussed();
};

export {overlayFilter};
