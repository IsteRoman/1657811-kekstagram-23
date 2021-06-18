import {commentArray} from './data.js';
import {showMiniature} from './miniature.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');

const getComment = function() {
  const commentBlock = document.querySelector('.social__comments');
  const commentTemplate = document.querySelector('.social__comment');
  const commentData = commentArray();

  const commentBlockElement = document.createDocumentFragment();

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
}

const closeByButton = function() {
  const closeBigPicture = document.querySelector('.big-picture__cancel');
  closeBigPicture.addEventListener('click', function() {  // eslint-disable-line
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  });
}

const browse = function() {
  showMiniature();
  getComment();
  const picture = document.querySelectorAll('.picture');
  const commentsCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
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





