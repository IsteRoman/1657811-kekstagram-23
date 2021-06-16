import {photoBlocks} from './data.js';

const showMiniature = function() {
  const photoList = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content;
  const miniatureData = photoBlocks();

  const photoListElement = document.createDocumentFragment();

  miniatureData.forEach(({userUrl, userLikes}) => {
    const miniPhoto = pictureTemplate.cloneNode(true);
    miniPhoto.querySelector('.picture__img').setAttribute('src', userUrl);
    miniPhoto.querySelector('.picture__likes').textContent = userLikes;
    miniPhoto.querySelector('.picture__comments').textContent = 1;
    photoListElement.appendChild(miniPhoto);
  });

  photoList.appendChild(photoListElement);
};

export {showMiniature};
