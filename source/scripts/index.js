// Открыте/закрытие меню
const menu = document.querySelector('.navigation');
const toggle = document.querySelector('.navigation__toggle');
const toggleText = toggle.querySelector('span');

menu.classList.remove('navigation--no-js');

toggle.onclick = () => {
  toggle.classList.toggle('menu-toggle--active');
  if (toggle.classList.contains('menu-toggle--active')) {
    toggleText.textContent = 'Закрыть меню';
  } else {
    toggleText.textContent = 'Открыть меню';
  }
  menu.classList.toggle('navigation--opened');
};

// Слайдер сравнения до/после
const slider = document.querySelector('.slider');
const sliderDivider = slider.querySelector('.slider__divider');
const sliderRange = slider.querySelector('.slider__range');
const sliderLeftImage = slider.querySelector('.slider__before');
const sliderRightImage = slider.querySelector('.slider__after');

const setDividerPosition = (value) => {
  sliderDivider.style.left = `${ value }%`;
};

const clipImages = (value) => {
  sliderLeftImage.style.clipPath = `inset(0 ${ 100 - value }% 0 0)`;
  sliderRightImage.style.clipPath = `inset(0 0 0 ${ value }%)`;
};

sliderRange.addEventListener('input', (evt) => {
  const position = evt.target.value;
  setDividerPosition(position);
  clipImages(position);
});
