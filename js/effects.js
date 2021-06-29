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

const classRemover = function () {
  image.classList.remove('effects__preview--chrome');
  image.classList.remove('effects__preview--sepia');
  image.classList.remove('effects__preview--marvin');
  image.classList.remove('effects__preview--phobos');
  image.classList.remove('effects__preview--heat');
};

const additionEffect = function() {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });

  const changeEffectsIntens = function(effectName, effectConventionalUnit) {
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
      sliderBlock.classList.add('hidden');
      image.removeAttribute('style');
      sliderValue.setAttribute('value', '');
      classRemover();

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
      classRemover();
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
      classRemover();
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
      classRemover();
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
      classRemover();
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
