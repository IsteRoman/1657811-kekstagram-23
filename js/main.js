const gettingValue = function(minValue, maxValue) {
  if (minValue < 0 || maxValue < 0) {
    alert('Значение меньше ноля'); // eslint-disable-line
    return;
  } else if (minValue > maxValue) {
    alert('Поменяйте числа местами'); // eslint-disable-line
  } else if (minValue === maxValue) {
    alert('Введенные числа равны'); // eslint-disable-line
  }
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

gettingValue();

const MAX_COMMENT_LENGHT = 140;

const checkLenght = function (commentField) {
  if (commentField >= MAX_COMMENT_LENGHT) {
    return false;
  }
};

checkLenght();
