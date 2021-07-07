import {showMiniature} from './miniature.js';
import {openBlock} from './util.js';
import {closeByEsc} from './util.js';
import {closeByButton} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const commentsCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentBlock = document.querySelector('.social__comments');
const NUMBER_COMMENT_SHOW = 5;
const commentField = document.querySelector('.social__footer-text');

const getComment = (usersPhotos, index) => {
  const commentTemplate = document.querySelector('#comments').content;
  const commentData = usersPhotos[index].comments;
  const commentBlockElement = document.createDocumentFragment();
  commentBlock.innerHTML = '';

  commentData.forEach(({avatar, name, message}) => {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').setAttribute('src', avatar);
    comment.querySelector('.social__picture').setAttribute('alt', name);
    comment.querySelector('.social__text').textContent = `${message}`;
    commentBlockElement.appendChild(comment);
  });
  commentBlock.appendChild(commentBlockElement);
};

const getCommentsCount = () => {
  const startNumber = commentBlock.querySelectorAll('.visible').length;
  const finalNumber = commentBlock.children.length;
  commentsCount.textContent = `${startNumber} из ${finalNumber} комментариев`;
};

const hideCommentsLoader = () => {
  commentsLoader.classList.remove('hidden');
  if (commentBlock.children.length === commentBlock.querySelectorAll('.visible').length) {
    commentsLoader.classList.add('hidden');
  }
};

const showComment = () => {
  for( let i = 0; i < commentBlock.children.length; i++ ){
    const li = commentBlock.children;
    li[i].classList.add('hidden');
    for( let j = 0; j < NUMBER_COMMENT_SHOW; j++ ) {
      if ( li[j] ) {
        li[j].classList.add('visible');
        li[j].classList.remove('hidden');
      }
    }
    getCommentsCount();
    hideCommentsLoader();
  }
};

const showNewComment = () => {
  commentsLoader.addEventListener('click', () => {
    const visible = commentBlock.querySelectorAll('.visible');
    let next = visible[visible.length-1].nextElementSibling;
    for (let f = 0; f < NUMBER_COMMENT_SHOW; f++) {
      if( next ) {
        next.classList.add('visible');
        next.classList.remove('hidden');
        next = next.nextElementSibling;
        getCommentsCount();
        hideCommentsLoader();
      }
    }
  });
};

const browse = (usersPhotos) => {

  showMiniature(usersPhotos);

  const picture = document.querySelectorAll('.picture');

  picture.forEach((showBigPictuer, ind) => {
    const openBigPicture = function(index, evt) {
      evt.preventDefault();
      getComment(usersPhotos, index);

      const likes = document.querySelector('.likes-count');
      const pictureUrl = document.querySelector('.big-picture__img').
        querySelector('img');
      const discription = document.querySelector('.social__caption');
      const userDescription = usersPhotos[index].description;
      discription.textContent = userDescription;

      openBlock(bigPicture);

      const allLikes = this.querySelector('.picture__likes');
      const allUrls = this.querySelector('.picture__img');
      const allUrl = allUrls.getAttribute('src');

      likes.textContent = `${allLikes.textContent}`;
      pictureUrl.setAttribute('src', allUrl);

      showComment();
      closeByEsc(bigPicture, commentField);
      closeByButton(closeBigPicture, bigPicture);
    };
    showBigPictuer.addEventListener('click', openBigPicture.bind(showBigPictuer, ind));
  });
};

showNewComment();

export {browse};
export {showNewComment};
