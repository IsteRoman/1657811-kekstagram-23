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

const getCommentsCount = function() {
  const startNumber = commentBlock.querySelectorAll('.visi').length;
  const finalNumber = commentBlock.children.length;
  commentsCount.textContent = `${startNumber} из ${finalNumber} комментариев`;
};

const hideCommentsLoader = function() {
  if (commentBlock.children.length === commentBlock.querySelectorAll('.visi').length) {
    commentsLoader.classList.add('hidden');
  }
};

const showComment = function() {
  for( let i = 0; i < commentBlock.children.length; i++ ){
    const li = commentBlock.children;
    li[i].classList.add('hidden');
    for( let j = 0; j < NUMBER_COMMENT_SHOW; j++ ) {
      if ( li[j] ) {
        li[j].classList.add('visi');
        li[j].classList.remove('hidden');
      }
    }
    getCommentsCount();
    hideCommentsLoader();

    commentsLoader.addEventListener('click', () => {
      const visi = commentBlock.querySelectorAll('.visi');
      let next = visi[visi.length-1].nextElementSibling;

      for (let f = 0; f < NUMBER_COMMENT_SHOW; f++) {
        if( next ) {
          next.classList.add('visi');
          next.classList.remove('hidden');
          next = next.nextElementSibling;
          getCommentsCount();
          hideCommentsLoader();
        }
      }
    });
  }
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
