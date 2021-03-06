import {cleanseForm} from './upload.js';

const WAITING_TIME = 500;
const body = document.querySelector('body');

const debounce = (callback) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), WAITING_TIME);
  };
};

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
  const onCloseByEsc = (evt) => {
    if (evt.keyCode === 27) {
      if(!(document.activeElement.isEqualNode(field1) || document.activeElement.isEqualNode(field2))) {
        closeBlock(object);
        cleanseForm();
      }
    }
  };
  window.addEventListener('keydown', onCloseByEsc);
};

const closeByButton = (button, object) => {
  const onCloseByButton = () => {
    closeBlock(object);
    cleanseForm();
  };
  button.addEventListener('click', onCloseByButton);
};

const addMessage = (object) => {
  body.appendChild(object);
};

const removeMessage = (object) => {
  if (body.contains(object)) {
    body.removeChild(object);
  }
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
    if (!(document.activeElement.isEqualNode(object)) && !(document.activeElement.isEqualNode(button))) {
      removeMessage(object);
    }
  });
};

const showMessage = (button, object) => {
  addMessage(object);
  closeMessage(button, object);
};

const showServerFailMessage = (button, object) => {
  addMessage(object);
  const titleServerFail = document.querySelector('.error__title');
  const buttonServerFail = document.querySelector('.error__button');
  titleServerFail.textContent = '?????????????????? ???? ??????????????';
  buttonServerFail.textContent = '????';
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
