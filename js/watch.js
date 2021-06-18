import {showMiniature} from './miniature.js';
import {blockPhoto} from './data.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');

const getComment = function(index) {
  const commentBlock = document.querySelector('.social__comments');
  const commentTemplate = document.querySelector('#comments').content;
  const commentData = blockPhoto[index].userComment;
  const commentBlockElement = document.createDocumentFragment();
  commentBlock.innerHTML = '';

  commentData.forEach(({userCommentAvatar, userCommentName, userCommentMessage}) => {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').setAttribute('src', userCommentAvatar);
    comment.querySelector('.social__picture').setAttribute('alt', userCommentName);
    comment.querySelector('.social__text').textContent = `${userCommentMessage}`;

    commentBlockElement.appendChild(comment);
  });
  commentBlock.appendChild(commentBlockElement);
};
const closeByEsc = function() {
  window.addEventListener('keydown', function(evt) {  // eslint-disable-line
    if (evt.keyCode === 27) {  // eslint-disable-line
      body.classList.remove('modal-open');
      bigPicture.classList.add('hidden');
    }
  });
};

const closeByButton = function() {
  const closeBigPicture = document.querySelector('.big-picture__cancel');
  closeBigPicture.addEventListener('click', function() {  // eslint-disable-line
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  });
};

const browse = function() {

  showMiniature();
  const picture = document.querySelectorAll('.picture');
  const commentsCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  picture.forEach(function(showBigPictuer, index) {   // eslint-disable-line
    showBigPictuer.addEventListener('click', openBigPicture.bind(showBigPictuer, index));  // eslint-disable-line
  });  // eslint-disable-line
  function openBigPicture(index, event) {
    event.preventDefault();
    getComment(index);

    const likes = document.querySelector('.likes-count');
    const pictureUrl = document.querySelector('.big-picture__img').
      querySelector('img');
    const discription = document.querySelector('.social__caption');
    const sd = blockPhoto[index].userDescription;
    discription.textContent = sd;

    body.classList.add('modal-open');
    bigPicture.classList.remove('hidden');

    const allLikes = this.querySelector('.picture__likes');
    const allUrls = this.querySelector('.picture__img');
    const allUrl = allUrls.getAttribute('src');

    likes.textContent = `${allLikes.textContent}`;
    pictureUrl.setAttribute('src', allUrl);
    commentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');

    closeByEsc();
    closeByButton();
  }
};

export {browse};
