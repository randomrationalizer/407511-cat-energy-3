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
