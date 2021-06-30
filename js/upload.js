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

const cleanseInputs = function() {
  hashtagsField.value = '';
  commentField.value = '';
}

const cleanseForm = function() {
  cleanseFiltersBlock()
  cleanseInputs();
}

const uploadImage = function() {
  buttonOpenFormUpload.addEventListener('click', () => {
    openBlock(imageUpload);
  });
  cheangeScale();
  additionEffect();
  checkFieldValididy();
  closeByEsc(imageUpload, hashtagsField, commentField);
  closeByButton(buttonCloseFormUpload, imageUpload);

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    sentData(formData, imageUpload);
  })
};

export{cleanseInputs};
export{uploadImage};
export {cleanseForm};
