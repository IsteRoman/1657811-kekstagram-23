const gettingValue = function(minValue, maxValue) {
  const min = Math.ceil(Math.min(Math.abs(minValue), Math.abs(maxValue)));
  const max = Math.floor(Math.max(Math.abs(minValue), Math.abs(maxValue)));

  return Math.floor(Math.random() * (max - min + 1) + min);
};


const getRandomArrayElement = (elements) => { // eslint-disable-line
  return elements[gettingValue(0, elements.length - 1)]; // eslint-disable-line
}; // eslint-disable-line

export {gettingValue};
export {getRandomArrayElement};
