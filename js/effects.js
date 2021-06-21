const imageBlock = document.querySelector('.img-upload__preview');
const image = imageBlock.children[0];
const effectList = document.querySelector('.effects__list');
const effectOriginal = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');
const slider = document.querySelector('.effect-level');


const additionEffect = function() {
  slider.classList.add('hidden');
  const classRemover = function () {
    image.classList.remove('effects__preview--chrome');
    image.classList.remove('effects__preview--sepia');
    image.classList.remove('effects__preview--marvin');
    image.classList.remove('effects__preview--phobos');
    image.classList.remove('effects__preview--heat');
  };

  effectList.addEventListener('change', () => {
    if (effectOriginal.checked) {
      slider.classList.add('hidden');
      classRemover();
    } else if (effectChrome.checked) {
      slider.classList.remove('hidden');
      classRemover();
      image.classList.add('effects__preview--chrome');
    } else if (effectSepia.checked) {
      slider.classList.remove('hidden');
      classRemover();
      image.classList.add('effects__preview--sepia');
    } else if (effectMarvin.checked) {
      slider.classList.remove('hidden');
      classRemover();
      image.classList.add('effects__preview--marvin');
    } else if (effectPhobos.checked) {
      slider.classList.remove('hidden');
      classRemover();
      image.classList.add('effects__preview--phobos');
    } else if (effectHeat.checked) {
      slider.classList.remove('hidden');
      classRemover();
      image.classList.add('effects__preview--heat');
    }
  });
};

const cheangeScale = function() {
  const buttonScalePlus = document.querySelector('.scale__control--bigger');
  const buttonScaleMinus = document.querySelector('.scale__control--smaller');
  const scaleControl = document.querySelector('.scale__control--value');
  const minScaleValue = 25;
  const preMaxScaleValue = 75;
  const maxScaleValue = 100;
  const scaleStep = 25;

  const dec = function() {
    if (parseFloat(scaleControl.getAttribute('value')) > minScaleValue) {
      scaleControl.setAttribute('value', `${parseFloat(scaleControl.getAttribute('value')) - scaleStep}%`);
      buttonScalePlus.removeAttribute('disabled');
      image.style.transform = `scale(${parseFloat(scaleControl.getAttribute('value'))}%)`;
    } else if (parseFloat(scaleControl.getAttribute('value')) === minScaleValue) {
      buttonScaleMinus.setAttribute('disabled', 'disabled');
    }
  };

  const inc = function() {
    if (parseFloat(scaleControl.getAttribute('value')) <= preMaxScaleValue) {
      scaleControl.setAttribute('value', `${parseFloat(scaleControl.getAttribute('value')) + scaleStep}%`);
      buttonScaleMinus.removeAttribute('disabled');
      image.style.transform = `scale(${parseFloat(scaleControl.getAttribute('value'))}%)`;
    } else if (parseFloat(scaleControl.getAttribute('value')) === maxScaleValue) {
      buttonScalePlus.setAttribute('disabled', 'disabled');
    }
  };

  buttonScaleMinus.addEventListener('click', dec);

  buttonScalePlus.addEventListener('click', inc);
};

export{cheangeScale};
export{additionEffect};

