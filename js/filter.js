
import {getRandomArrayElement} from './util.js';

const buttonDefault = document.querySelector('#filter-default');
const buttonRandom = document.querySelector('#filter-random');
const buttonDiscussed = document.querySelector('#filter-discussed');

const filter = function(userPhotos) {


  const removerClass = function() {
    buttonDefault.classList.remove('img-filters__button--active');
    buttonRandom.classList.remove('img-filters__button--active');
    buttonDiscussed.classList.remove('img-filters__button--active');
  };

  const clickDefault = function() {
    buttonDefault.addEventListener('click', () => {
      removerClass();
      buttonDefault.classList.add('img-filters__button--active');

    }); return userPhotos;
  };

  const clickRandom = function() {
    buttonRandom.addEventListener('click', () => {
      removerClass();
      buttonRandom.classList.add('img-filters__button--active');
      const userPhotosNew1 = userPhotos.slice();
      const news = [];

      let count = 0;
      while (count <= 9) {
        news.push(getRandomArrayElement(userPhotosNew1));
        count ++;
      }
      userPhotos = news;
    });
  };

  const clickDiscussed = function() {
    buttonDiscussed.addEventListener('click', () => {
      removerClass();
      buttonDiscussed.classList.add('img-filters__button--active');

      userPhotos.sort( (a, b) => b.comments.length - a.comments.length);

    });
  };

  clickDefault(userPhotos);
  clickRandom(userPhotos);
  clickDiscussed(userPhotos);

};

export {filter};
