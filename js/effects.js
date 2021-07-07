import './nouislider.js'

const imageBlock = document.querySelector('.img-upload__preview');
const image = imageBlock.children[0];
const effectList = document.querySelector('.effects__list');
const effectOriginal = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');
const sliderBlock = document.querySelector('.effect-level');
const sliderValue = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const buttonScalePlus = document.querySelector('.scale__control--bigger');
const buttonScaleMinus = document.querySelector('.scale__control--smaller');
const scaleControl = document.querySelector('.scale__control--value');
const MIN_SCALE_VALUE = 25;
const PRE_MAX_SCALE_VALUE = 75;
const MAX_SCALE_VALUE = 100;
const SCALE_STEP = 25;

const dec = () => {
  if (parseFloat(scaleControl.getAttribute('value')) > MIN_SCALE_VALUE) {
    scaleControl.setAttribute('value', `${parseFloat(scaleControl.getAttribute('value')) - SCALE_STEP}%`);
    buttonScalePlus.removeAttribute('disabled');
    image.style.transform = `scale(${parseFloat(scaleControl.getAttribute('value'))}%)`;
  } else if (parseFloat(scaleControl.getAttribute('value')) === MIN_SCALE_VALUE) {
    buttonScaleMinus.setAttribute('disabled', 'disabled');
  }
};

const inc = () => {
  if (parseFloat(scaleControl.getAttribute('value')) <= PRE_MAX_SCALE_VALUE) {
    scaleControl.setAttribute('value', `${parseFloat(scaleControl.getAttribute('value')) + SCALE_STEP}%`);
    buttonScaleMinus.removeAttribute('disabled');
    image.style.transform = `scale(${parseFloat(scaleControl.getAttribute('value'))}%)`;
  } else if (parseFloat(scaleControl.getAttribute('value')) === MAX_SCALE_VALUE) {
    buttonScalePlus.setAttribute('disabled', 'disabled');
  }
};

const removeClass = () => {
  image.classList.remove('effects__preview--chrome');
  image.classList.remove('effects__preview--sepia');
  image.classList.remove('effects__preview--marvin');
  image.classList.remove('effects__preview--phobos');
  image.classList.remove('effects__preview--heat');
};

const cleanseFilter = () => {
  sliderBlock.classList.add('hidden');
  image.style.filter = ('');
  sliderValue.setAttribute('value', '');
  removeClass();
};

const cleanseFiltersBlock = () => {
  cleanseFilter();
  scaleControl.setAttribute('value', '100');
  image.style.transform = 'scale(100%)';
};

const useEffect = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });

  const changeEffectsIntens = (effectName, effectConventionalUnit) => {
    slider.noUiSlider.on('update', (_, handle, unencoded) => {
      sliderValue.setAttribute('value', `${unencoded[handle]}`);
      if (effectConventionalUnit) {
        image.style.filter = `${effectName}(${sliderValue.value}${effectConventionalUnit})`;
      } else {
        image.style.filter = `${effectName}(${sliderValue.value})`;
      }
    });
  };

  sliderBlock.classList.add('hidden');

  effectList.addEventListener('change', () => {
    if (effectOriginal.checked) {
      cleanseFilter();

    } else if (effectChrome.checked) {
      sliderBlock.classList.remove('hidden');
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
      });
      slider.noUiSlider.set(1);
      changeEffectsIntens('grayscale');
      removeClass();
      image.classList.add('effects__preview--chrome');

    } else if (effectSepia.checked) {
      sliderBlock.classList.remove('hidden');
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
      });
      slider.noUiSlider.set(1);
      changeEffectsIntens('sepia');
      removeClass();
      image.classList.add('effects__preview--sepia');

    } else if (effectMarvin.checked) {
      sliderBlock.classList.remove('hidden');
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
      });
      slider.noUiSlider.set(100);
      changeEffectsIntens('invert', '%');
      removeClass();
      image.classList.add('effects__preview--marvin');

    } else if (effectPhobos.checked) {
      sliderBlock.classList.remove('hidden');
      slider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
      });
      slider.noUiSlider.set(3);
      changeEffectsIntens('blur', 'px');
      removeClass();
      image.classList.add('effects__preview--phobos');

    } else if (effectHeat.checked) {
      sliderBlock.classList.remove('hidden');
      slider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
      });
      slider.noUiSlider.set(3);
      changeEffectsIntens('brightness');
      removeClass();
      image.classList.add('effects__preview--heat');
    }
  });
};

const cheangeScale = () => {
  buttonScaleMinus.addEventListener('click', dec);

  buttonScalePlus.addEventListener('click', inc);
};

export{cheangeScale};
export{useEffect};
export {cleanseFiltersBlock};
export {image};
