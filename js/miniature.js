const showMiniature = (usersPhotos) => {
  const photoList = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content;
  const photoListElement = document.createDocumentFragment();

  usersPhotos.forEach(({url, likes, comments}) => {
    const miniPhoto = pictureTemplate.cloneNode(true);
    miniPhoto.querySelector('.picture__img').setAttribute('src', url);
    miniPhoto.querySelector('.picture__likes').textContent = likes;
    miniPhoto.querySelector('.picture__comments').textContent = `${comments.length}`;
    photoListElement.appendChild(miniPhoto);
  });

  photoList.appendChild(photoListElement);
};

export {showMiniature};
