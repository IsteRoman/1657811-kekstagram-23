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

const randomValueNoRepeatArray1 = randomValueNoRepeat(1, 25);
const randomValueNoRepeatArray2 = randomValueNoRepeat(1, 25);
const randomValueNoRepeatArray3 = randomValueNoRepeat(1, 25);

const getRandomArrayElement = (elements) => { // eslint-disable-line
  return elements[gettingValue(0, elements.length - 1)]; // eslint-disable-line
}; // eslint-disable-line

export {gettingValue};
export {randomValueNoRepeatArray1};
export {randomValueNoRepeatArray2};
export {randomValueNoRepeatArray3};
export {getRandomArrayElement};
