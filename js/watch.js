
import {showMiniature} from './miniature.js';
import {getBigPicture} from './big-picture.js';
import {bigPicture} from './big-picture.js';

const browse = function() {
  showMiniature();
  const body = document.querySelector('body');
  const picture = document.querySelectorAll('.picture');
  const commentsCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const closeBigPicture = document.querySelector('.big-picture__cancel');
  picture.forEach(function(showBigPictuer) {   // eslint-disable-line
    showBigPictuer.addEventListener('click', openBigPicture);  // eslint-disable-line
  });  // eslint-disable-line
  function openBigPicture(event) {
    event.preventDefault();

    const likes = document.querySelector('.likes-count');
    const pictureUrl = document.querySelector('.big-picture__img').
      querySelector('img');
    const commentsNumber = document.querySelector('.comments-count');  // eslint-disable-line
    const discription = document.querySelector('.social__caption'); // eslint-disable-line

    body.classList.add('modal-open');
    getBigPicture();
    const allLikes = this.querySelector('.picture__likes');
    const allUrls = this.querySelector('.picture__img');
    const allUrl = allUrls.getAttribute('src');

    likes.textContent = `${allLikes.textContent}`;
    pictureUrl.setAttribute('src', allUrl);
    commentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    window.addEventListener('keydown', function(evt) {  // eslint-disable-line
      if (evt.keyCode === 27) {  // eslint-disable-line
        body.classList.remove('modal-open');
        bigPicture.classList.add('hidden');
      }
    });
    closeBigPicture.addEventListener('click', function() {  // eslint-disable-line
      body.classList.remove('modal-open');
      bigPicture.classList.add('hidden');
    });
  }
};
export {browse};
