import {commentArray} from './data.js';

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

const getBigPicture = function() {
  bigPicture.classList.remove('hidden');
  getComment();
};

export{getBigPicture};
export{bigPicture};
