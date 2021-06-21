import {showMiniature} from './miniature.js';
import {blockPhoto} from './data.js';
import {openBlock} from './util.js';
import {closeByEsc} from './util.js';
import {closeByButton} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = document.querySelector('.big-picture__cancel');

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

const browse = function() {

  showMiniature();

  const picture = document.querySelectorAll('.picture');
  const commentsCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');

  picture.forEach((showBigPictuer, index) => {
    const openBigPicture = function(index, event) { // eslint-disable-line
      event.preventDefault();
      getComment(index);

      const likes = document.querySelector('.likes-count');
      const pictureUrl = document.querySelector('.big-picture__img').
        querySelector('img');
      const discription = document.querySelector('.social__caption');
      const userDescription = blockPhoto[index].userDescription;
      discription.textContent = userDescription;

      openBlock(bigPicture);

      const allLikes = this.querySelector('.picture__likes');
      const allUrls = this.querySelector('.picture__img');
      const allUrl = allUrls.getAttribute('src');

      likes.textContent = `${allLikes.textContent}`;
      pictureUrl.setAttribute('src', allUrl);
      commentsCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');

      closeByEsc(bigPicture);
      closeByButton(closeBigPicture, bigPicture);
    };

    showBigPictuer.addEventListener('click', openBigPicture.bind(showBigPictuer, index));
  });
};

export {browse};
