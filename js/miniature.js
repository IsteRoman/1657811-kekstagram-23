import {blockPhoto} from './data.js';


const showMiniature = function() {
  const photoList = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content;

  const photoListElement = document.createDocumentFragment();

  blockPhoto.forEach(({userUrl, userLikes, userComment}) => {
    const miniPhoto = pictureTemplate.cloneNode(true);
    miniPhoto.querySelector('.picture__img').setAttribute('src', userUrl);
    miniPhoto.querySelector('.picture__likes').textContent = userLikes;
    miniPhoto.querySelector('.picture__comments').textContent = `${userComment.length}`;
    photoListElement.appendChild(miniPhoto);
  });

  photoList.appendChild(photoListElement);
};

export {showMiniature};
