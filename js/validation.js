const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const checkLenght = function (string, maxStringLenght) {
  return string.length <= maxStringLenght;
};

checkLenght('asd', 4);

const setErrorStyle = function(object) {
  object.style.border = '5px solid rgb(255, 0, 0)';
};

const removeErrorStyle = function(object) {
  object.removeAttribute('style');
};

const checkHashtagsField = function() {
  const maxHashtagsNumber = 5;
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  hashtagsField.addEventListener('blur', () => {
    const string = hashtagsField.value;
    const hashtagsArray = string.split(' ', 6);
    let errorMessageA = '';
    let errorMessageB = '';
    let errorMessageC = '';

    const checkInputCorrect = function() {
      for (let i=0; i <= hashtagsArray.length-1; i++) {
        if(!re.test(`${hashtagsArray[i]}`)) {
          errorMessageA = 'Хэш-тег начинается с символа #.Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы, символы пунктуации, эмодзи и т. д.; ';
          return false;
        }
      }
    };

    const checkHashtagsLength = function() {
      if (hashtagsArray.length > maxHashtagsNumber) {
        errorMessageB = 'Допустимо не более 5 хэш-тегов ';
        return false;
      }
    };

    const checkIdentityValues = function() {
      const toUpper = function(x) {
        return x.toUpperCase();
      };
      const hashtagsArrayUpper = hashtagsArray.map(toUpper);

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

    if (string.length === 0) {
      removeErrorStyle(hashtagsField);
      hashtagsField.setCustomValidity('');
    }
  });
};

const checkCommentLength = function() {
  const maxCommentLenght = 10;
  commentField.addEventListener('blur', () => {
    if (commentField.value.length > maxCommentLenght) {
      setErrorStyle(commentField);
      commentField.setCustomValidity(`Максимальная длинна ${maxCommentLenght} символов`);
    } else if (commentField.value.length <= maxCommentLenght) {
      removeErrorStyle(commentField);
      commentField.setCustomValidity('');
    }
  });
};

const checkFieldValididy = function() {
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
