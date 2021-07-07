import {openBlock} from './util.js';
import {closeByEsc} from './util.js';
import {closeByButton} from './util.js';
import {cheangeScale} from './effects.js';
import {useEffect} from './effects.js';
import {cleanseFiltersBlock} from './effects.js';
import {checkFieldValididy} from './validation.js';
import {hashtagsField} from './validation.js';
import {commentField} from './validation.js';
import {sentData} from './server.js';
import {image} from './effects.js';

const imageUpload = document.querySelector('.img-upload__overlay');
const buttonCloseFormUpload = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const pictureInput = document.querySelector('.img-upload__input');

const uploadPicture = () => {
  pictureInput.remove.files;
  const onReadURL = () => {
    const file = pictureInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      image.setAttribute('src', `${reader.result}`);
    });
    if (file) {
      reader.readAsDataURL(file);
      openBlock(imageUpload);
    }
  };
  pictureInput.addEventListener('change', onReadURL, true);
};
const cleansePicture = () => {
  uploadForm.reset();
  image.setAttribute('src', ' ');
};

const cleanseInputs = () => {
  hashtagsField.value = '';
  commentField.value = '';
};

const cleanseForm = () => {
  cleanseFiltersBlock();
  cleanseInputs();
  cleansePicture();
};

const uploadImage = () => {

  uploadPicture();
  cheangeScale();
  useEffect();
  checkFieldValididy();
  closeByEsc(imageUpload, hashtagsField, commentField);
  closeByButton(buttonCloseFormUpload, imageUpload);

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    sentData(formData, imageUpload);
  });
};

export{cleanseInputs};
export{uploadImage};
export {cleanseForm};
