const divElement = document.querySelector('.example__range');
const buttonElement = document.querySelector('.example__button');

divElement.classList.add('example__button--skinny');

buttonElement.addEventListener('click', () => {
  if (divElement.classList.contains('example__button--skinny')) {
    divElement.classList.add('example__button');
    divElement.classList.remove('example__button--skinny');
  } else {
    divElement.classList.add('example__button--skinny');
    divElement.classList.remove('example__button');
  }
});
