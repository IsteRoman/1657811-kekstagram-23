import {openBlock} from './util.js';
import {closeByEsc} from './util.js';
import {closeByButton} from './util.js';
import {cheangeScale} from './effects.js';
import {additionEffect} from './effects.js';
import {cleanseFiltersBlock} from './effects.js';
import {checkFieldValididy} from './validation.js';
import {hashtagsField} from './validation.js';
import {commentField} from './validation.js';
import {sentData} from './server.js';

const imageUpload = document.querySelector('.img-upload__overlay');
const buttonOpenFormUpload = document.querySelector('.img-upload__label');
const buttonCloseFormUpload = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const pictureInput = document.querySelector('.img-upload__input');
const pictureBlock = document.querySelector('.img-upload__preview');
const picture = pictureBlock.children[0];

const uploadPicture = function() {
  pictureInput.addEventListener('change', readURL, true);
  function readURL() {
    const file = pictureInput.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
      picture.setAttribute('src', `${reader.result}`);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
};

const cleansePicture = function() {
  picture.setAttribute('src', 'img/upload-default-image.jpg');
};

const cleanseInputs = function() {
  hashtagsField.value = '';
  commentField.value = '';
};

const cleanseForm = function() {
  cleanseFiltersBlock();
  cleanseInputs();
  cleansePicture();
};

const uploadImage = function() {
  buttonOpenFormUpload.addEventListener('click', () => {
    openBlock(imageUpload);
  });
  uploadPicture();
  cheangeScale();
  additionEffect();
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
