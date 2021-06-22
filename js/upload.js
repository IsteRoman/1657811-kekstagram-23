import {openBlock} from './util.js';
import {closeByEsc} from './util.js';
import {closeByButton} from './util.js';
import {cheangeScale} from './effects.js';
import {additionEffect} from './effects.js';
import {checkFieldValididy} from './validation.js';

const imageUpload = document.querySelector('.img-upload__overlay');
const buttonOpenFormUpload = document.querySelector('.img-upload__label');
const buttonCloseFormUpload = document.querySelector('.img-upload__cancel');

const uploadImage = function() {
  buttonOpenFormUpload.addEventListener('click', () => {
    openBlock(imageUpload);
  });
  cheangeScale();
  additionEffect();
  checkFieldValididy();
  closeByEsc(imageUpload);
  closeByButton(buttonCloseFormUpload, imageUpload);
};

export{uploadImage};
