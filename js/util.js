import {cleanseForm} from './upload.js';

const body = document.querySelector('body');

const gettingValue = (minValue, maxValue) => {
  const min = Math.ceil(Math.min(Math.abs(minValue), Math.abs(maxValue)));
  const max = Math.floor(Math.max(Math.abs(minValue), Math.abs(maxValue)));

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomValueNoRepeat = (min, max) => {
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

const randomValueForCommentId = getRandomValueNoRepeat(1, 25);
const randomValueForUserId = getRandomValueNoRepeat(1, 25);
const randomValueForUserUrl = getRandomValueNoRepeat(1, 25);

const getRandomArrayElement = (elements) => elements[gettingValue(0, elements.length - 1)];

const openBlock = (object) => {
  body.classList.add('modal-open');
  object.classList.remove('hidden');
};

const closeBlock = (object) => {
  body.classList.remove('modal-open');
  object.classList.add('hidden');
};

const removeElementsByClass = (className) => {
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
};

const setErrorStyle = (object) => {
  object.style.border = '5px solid rgb(255, 0, 0)';
};

const removeErrorStyle = (object) => {
  object.removeAttribute('style');
};

const closeByEsc = (object, field1, field2) => {
  const closeEsc = (evt) => {
    if (evt.keyCode === 27) {
      if(!(document.activeElement.isEqualNode(field1) || document.activeElement.isEqualNode(field2))) {
        closeBlock(object);
        cleanseForm();
        window.removeEventListener('keydown', closeEsc);
      }
    }
  };
  window.addEventListener('keydown', closeEsc);
};

const closeByButton = (button, object) => {
  const closeButton = () => {
    closeBlock(object);
    cleanseForm();
    button.removeEventListener('click', closeButton);
  };
  button.addEventListener('click', closeButton);
};

const addMessage = (objectAdd) => {
  body.appendChild(objectAdd);
};

const removeMessage = (object) => {
  body.removeChild(object);
};

const closeMessage = (button, object) => {
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

const showMessage = (objectAdd, button, object) => {
  addMessage(objectAdd);
  closeMessage(button, object);
};

const showServerFailMessage = (objectAdd, button, object) => {
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
export {removeElementsByClass};
