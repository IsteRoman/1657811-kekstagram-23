import {showMessage} from './util.js';
import {closeBlock} from './util.js';
import {addMessage} from './util.js';
import {removeMessage} from './util.js';
import {cleanseForm} from './upload.js';

const successTemplate = document.querySelector('#success').content;
const successSection = successTemplate.querySelector('.success');
const successButton = successSection.querySelector('.success__button');
const errorTemplate = document.querySelector('#error').content;
const errorSection = errorTemplate.querySelector('.error');
const errorButton = errorSection.querySelector('.error__button');
const loadingTemplate = document.querySelector('#messages').content;
const loadingSection = loadingTemplate.querySelector('.img-upload__message');

const getData = function(onSuccess) {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((userPhotos) => {
      onSuccess(userPhotos);
    });
};

const sentData = function(bodyObject, closeObject) {
  addMessage(loadingTemplate);
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: bodyObject,
    },
  )
    .then((response) => {
      if (response.ok) {
        removeMessage(loadingSection);
        closeBlock(closeObject);
        cleanseForm();
        showMessage(successTemplate, successButton, successSection);
      } else {
        removeMessage(loadingSection);
        showMessage(errorTemplate, errorButton, errorSection);
      }
    })
    .catch(() => {
      removeMessage(loadingSection);
      showMessage(errorTemplate, errorButton, errorSection);
    });
};

export {getData};
export {sentData};
