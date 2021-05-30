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

const checkLenght = function (string, maxStringLenght) {
  return string.length <= maxStringLenght;
}

const a = checkLenght('new function', 5)
const b = checkLenght('new', 5)
const c = checkLenght('alpha', 4)

document.write('A: ' + a + ' B: ' + b + ' c: ' + c)

