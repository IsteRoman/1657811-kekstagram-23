const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const checkLenght = function (string, maxStringLenght) {
  return string.length <= maxStringLenght;
};

checkLenght('asd', 4);

const setErrorStyle = function(object) {
  object.style.color = 'rgb(255, 0, 0)';
};

const removeErrorStyle = function(object) {
  object.removeAttribute('style');
};

const checkHashtagsField = function() {
  const maxHashtagsNumber = 5;
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  hashtagsField.addEventListener('input', () => {
    const string =  hashtagsField.value;
    const hashtagsArray = string.split(' ', 5);

    for (let i = 0; i < hashtagsArray.length-1; i++) { // eslint-disable-line
      if (!re.test(`${hashtagsArray[0]}`)) {
        setErrorStyle(hashtagsField);
        hashtagsField.setCustomValidity('хэш-тег начинается с символа #.Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы, символы пунктуации, эмодзи и т. д.;');
      } else if (re.test(hashtagsArray[i])) {
        removeErrorStyle(hashtagsField);
        hashtagsField.setCustomValidity('');
      }
      const x = hashtagsArray.length-1; // eslint-disable-line
      if (`${hashtagsArray[x]}`.toUpperCase() === `${hashtagsArray[i]}`.toUpperCase()) {
        setErrorStyle(hashtagsField);
        hashtagsField.setAttribute('maxlength', `${hashtagsField.value.length}`);
        hashtagsField.setCustomValidity('Хэштэги не должны повторяться');
      } else if (`${hashtagsArray[x]}`.toUpperCase() !== `${hashtagsArray[i]}`.toUpperCase()) {
        removeErrorStyle(hashtagsField);
        hashtagsField.removeAttribute('maxlength');
        hashtagsField.setCustomValidity('');
      }
      if (hashtagsArray.length === maxHashtagsNumber) {
        hashtagsField.setAttribute('maxlength', `${hashtagsField.value.length}`);
      } else if (hashtagsField.length < maxHashtagsNumber) {
        hashtagsField.removeAttribute('maxlength');
      }
    }
  });
};

const checkCommentLength = function() {
  const maxCommentLenght = 40;
  commentField.addEventListener('input', () => {
    if (commentField.value.length > maxCommentLenght) {
      setErrorStyle(commentField);
      commentField.setCustomValidity(`Максимальная длинна ${maxCommentLenght} символов`);
    } else if (commentField.value.length < maxCommentLenght) {
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
