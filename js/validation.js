import {setErrorStyle} from './util.js';
import {removeErrorStyle} from './util.js';

const MAX_HASHTAGS_NUMBER = 5;
const MAX_COMMENT_LENGTH = 140;
const ZERO_VALUE = 0;
const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const checkHashtagsField = () => {

  hashtagsField.addEventListener('blur', () => {
    const string = hashtagsField.value;
    const hashtagsArray = string.split(' ');
    let errorMessageA = '';
    let errorMessageB = '';
    let errorMessageC = '';

    const checkInputCorrect = () => {
      for (let i=0; i <= hashtagsArray.length-1; i++) {
        if(!re.test(`${hashtagsArray[i]}`)) {
          errorMessageA = 'Хэш-тег начинается с символа #.Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы, символы пунктуации, эмодзи и т. д.; ';
          return false;
        }
      }
    };

    const checkHashtagsLength = () => {
      if (hashtagsArray.length > MAX_HASHTAGS_NUMBER) {
        errorMessageB = 'Допустимо не более 5 хэш-тегов ';
        return false;
      }
    };

    const checkIdentityValues = () => {
      const changeToUpper = (x) => x.toUpperCase();
      const hashtagsArrayUpper = hashtagsArray.map(changeToUpper);

      const valueArr = hashtagsArrayUpper.map((item) => item);
      const isDuplicate = valueArr.some((item, idx) => valueArr.indexOf(item) !== idx);

      if (isDuplicate === true) {
        errorMessageC = 'Хэш-теги не должны повторяться';
        return false;
      }
    };

    checkInputCorrect();
    checkHashtagsLength();
    checkIdentityValues();

    if (checkInputCorrect() === false || checkHashtagsLength() === false || checkIdentityValues() === false) {
      const errorMessage = `${errorMessageA + errorMessageB + errorMessageC}`;
      setErrorStyle(hashtagsField);
      hashtagsField.setCustomValidity(`${errorMessage}`);
    } else {
      removeErrorStyle(hashtagsField);
      hashtagsField.setCustomValidity('');
    }

    if (string.length === ZERO_VALUE) {
      removeErrorStyle(hashtagsField);
      hashtagsField.setCustomValidity('');
    }
  });
};

const checkCommentLength = () => {
  commentField.addEventListener('blur', () => {
    if (commentField.value.length > MAX_COMMENT_LENGTH) {
      setErrorStyle(commentField);
      commentField.setCustomValidity(`Максимальная длинна ${MAX_COMMENT_LENGTH} символов`);
    } else if (commentField.value.length <= MAX_COMMENT_LENGTH) {
      removeErrorStyle(commentField);
      commentField.setCustomValidity('');
    }
  });
};

const checkFieldValididy = () => {
  checkHashtagsField();
  checkCommentLength();
  submitButton.addEventListener('submit', (evt) => {
    if (hashtagsField.hasAttribute('style') || commentField.hasAttribute('style')) {
      evt.preventDefault();
    }
  });
};

export{checkFieldValididy};
export{hashtagsField};
export{commentField};
