import {cleanseForm} from './upload.js';

const body = document.querySelector('body');
const WAITING_TIME = 500;

const debounce = (callback) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), WAITING_TIME);
  };
}

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
export {debounce};
