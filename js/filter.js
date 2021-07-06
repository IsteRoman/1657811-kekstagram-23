import {showMiniature} from './miniature.js';

const buttonDefault = document.querySelector('#filter-default');
const buttonRandom = document.querySelector('#filter-random');
const buttonDiscussed = document.querySelector('#filter-discussed');

const overlayFilter = (userPhotos) => {
  const userPhotosNewArray = userPhotos.slice();


  const removerClass = () => {
    buttonDefault.classList.remove('img-filters__button--active');
    buttonRandom.classList.remove('img-filters__button--active');
    buttonDiscussed.classList.remove('img-filters__button--active');
  };

  const clickDefault = () => {
    buttonDefault.addEventListener('click', () => {
      removerClass();
      buttonDefault.classList.add('img-filters__button--active');
      showMiniature(userPhotosNewArray);
    });
  };

  const clickRandom = () => {
    buttonRandom.addEventListener('click', () => {
      removerClass();
      buttonRandom.classList.add('img-filters__button--active');

      userPhotos.sort(() => Math.random() - 0.5);
      const userPhotosMix = userPhotos.slice(0, 9);

      showMiniature(userPhotosMix);
    });
  };

  const clickDiscussed = () => {
    buttonDiscussed.addEventListener('click', () => {
      removerClass();
      buttonDiscussed.classList.add('img-filters__button--active');
      userPhotos;
      userPhotos.sort((a, b) => b.comments.length - a.comments.length);
      showMiniature(userPhotos);
    });
  };

  clickDefault();
  clickRandom();
  clickDiscussed();
};

export {overlayFilter};
