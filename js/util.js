import {cleanseForm} from './upload.js';

const body = document.querySelector('body');

const gettingValue = function(minValue, maxValue) {
  const min = Math.ceil(Math.min(Math.abs(minValue), Math.abs(maxValue)));
  const max = Math.floor(Math.max(Math.abs(minValue), Math.abs(maxValue)));

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomValueNoRepeat = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = gettingValue(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = gettingValue(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const randomValueForCommentId = randomValueNoRepeat(1, 25);
const randomValueForUserId = randomValueNoRepeat(1, 25);
const randomValueForUserUrl = randomValueNoRepeat(1, 25);

const getRandomArrayElement = (elements) => elements[gettingValue(0, elements.length - 1)];

const openBlock = function(object) {
  body.classList.add('modal-open');
  object.classList.remove('hidden');
};

const closeBlock = function(object) {
  body.classList.remove('modal-open');
  object.classList.add('hidden');
};

const setErrorStyle = function(object) {
  object.style.border = '5px solid rgb(255, 0, 0)';
};

const removeErrorStyle = function(object) {
  object.removeAttribute('style');
};

const closeByEsc = function(object, field1, field2) {
  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      if(!(document.activeElement.isEqualNode(field1) || document.activeElement.isEqualNode(field2))) {
        closeBlock(object);
        cleanseForm();
      }
    }
  });
};

const closeByButton = function(button, object) {
  button.addEventListener('click', () => {
    closeBlock(object);
    cleanseForm();
  });
};

const addMessage = function(objectAdd) {
  body.appendChild(objectAdd);
};

const removeMessage = function(object) {
  body.removeChild(object);
};

const closeMessage = function(button, object) {
  button.addEventListener('click', () => {
    removeMessage(object);
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      removeMessage(object);
    }
  });

  window.addEventListener('click', () => {
    if (!(document.activeElement.isEqualNode(object))) {
      removeMessage(object);
    }
  });
};

const showMessage = function(objectAdd, button, object) {
  addMessage(objectAdd);
  closeMessage(button, object);
};

const showServerFailMessage = function(objectAdd, button, object) {
  addMessage(objectAdd);
  const titleServerFail = document.querySelector('.error__title');
  const buttonServerFail = document.querySelector('.error__button');
  titleServerFail.textContent = 'Неполадки на сервере';
  buttonServerFail.textContent = 'ОК';
  closeMessage(button, object);
};

export {gettingValue};
export {randomValueForCommentId};
export {randomValueForUserId};
export {randomValueForUserUrl};
export {getRandomArrayElement};
export {openBlock};
export {closeByEsc};
export {closeByButton};
export {closeBlock};
export {setErrorStyle};
export {removeErrorStyle};
export {addMessage};
export {removeMessage};
export {showMessage};
export {showServerFailMessage};
