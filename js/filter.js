const filtersButtonBlock = document.querySelector('.img-filters');
const buttonDefault = filtersButtonBlock.querySelector('#filter-default');
const buttonRandom = filtersButtonBlock.querySelector('#filter-random');
const buttonDiscussed = filtersButtonBlock.querySelector('#filter-discussed');

const filter = function() {
  filtersButtonBlock.classList.remove('img-filters--inactive');

  const removerClass = function() {
    buttonDefault.classList.remove('img-filters__button--active');
    buttonRandom.classList.remove('img-filters__button--active');
    buttonDiscussed.classList.remove('img-filters__button--active');
  };

  const clickDefault = function() {
    buttonDefault.addEventListener('click', () => {
      removerClass();
      buttonDefault.classList.add('img-filters__button--active');
    });
  };

  const clickRandom = function() {
    buttonRandom.addEventListener('click', () => {
      removerClass();
      buttonRandom.classList.add('img-filters__button--active');
    });
  };

  const clickDiscussed = function() {
    buttonDiscussed.addEventListener('click', () => {
      removerClass();
      buttonDiscussed.classList.add('img-filters__button--active');
    });
  };

  clickDefault();
  clickRandom();
  clickDiscussed();
};

filter();
