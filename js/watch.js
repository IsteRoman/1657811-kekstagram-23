import {showMiniature} from './miniature.js';
import {blockPhoto} from './data.js';
import {openBlock} from './util.js';
import {closeByEsc} from './util.js';
import {closeByButton} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentBlock = document.querySelector('.social__comments');
const NUMBER_COMMENT_SHOW = 5;
const NUMBER_ADD_COMMENT_SHOW = 4;

const getComment = function(index) {
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

const showComment = function() {
  commentsLoader.classList.add('hidden');
  let startNumber;
  const endNumber = commentBlock.children.length;
  if (commentBlock.children.length < NUMBER_COMMENT_SHOW) {
    startNumber = commentBlock.children.length;
  } else if (commentBlock.children.length > NUMBER_COMMENT_SHOW) {
    startNumber = NUMBER_COMMENT_SHOW;
    commentsLoader.classList.remove('hidden');
    const hiddenArray = [];
    for (let i = NUMBER_COMMENT_SHOW; i <= commentBlock.children.length-1; i++ ) { // eslint-disable-line
      commentBlock.children[i].classList.add('hidden');
      hiddenArray.push(commentBlock.children[i]);
    }
    commentsLoader.addEventListener('click', () => {
      if (hiddenArray.length >= NUMBER_COMMENT_SHOW) {
        for (let i = 0; i <= NUMBER_ADD_COMMENT_SHOW; i++ ) { // eslint-disable-line
          hiddenArray[i].classList.remove('hidden');
        }
        hiddenArray.splice(0, NUMBER_COMMENT_SHOW);
      } else if (hiddenArray.length < NUMBER_COMMENT_SHOW) {
        for (let i = 0; i <= hiddenArray.length-1; i++ ) { // eslint-disable-line
          hiddenArray[i].classList.remove('hidden');
        }
        hiddenArray.splice(0);
        commentsLoader.classList.add('hidden');
      }
    });
  }
  commentsCount.textContent = `${startNumber} из ${endNumber} коментариев`;
};


const browse = function() {

  showMiniature();

  const picture = document.querySelectorAll('.picture');

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

      showComment();

      closeByEsc(bigPicture);
      closeByButton(closeBigPicture, bigPicture);
    };

    showBigPictuer.addEventListener('click', openBigPicture.bind(showBigPictuer, index));
  });
};

export {browse};
