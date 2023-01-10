const navElement = document.querySelector('.header__nav');
const buttonElement = document.querySelector('.nav__toggle');

navElement.classList.add('header__nav--closed');

buttonElement.addEventListener('click', () => {
  if (navElement.classList.contains('header__nav--closed')) {
    navElement.classList.add('header__nav--opened');
    navElement.classList.remove('header__nav--closed');
  } else {
    navElement.classList.add('header__nav--closed');
    navElement.classList.remove('header__nav--opened');
  }
});


