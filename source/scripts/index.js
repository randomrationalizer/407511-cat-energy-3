const menu = document.querySelector('.navigation');
const toggle = document.querySelector('.navigation__toggle');
const toggleText = toggle.querySelector('span');

menu.classList.remove('navigation--no-js');

toggle.onclick = () => {
  if (toggle.classList.contains('menu-toggle--active')) {
    toggle.classList.remove('menu-toggle--active');
    toggleText.textContent = 'Открыть меню';
    menu.classList.remove('navigation--opened');
    menu.classList.add('navigation--closed');

  } else {
    toggle.classList.add('menu-toggle--active');
    toggleText.textContent = 'Закрыть меню';
    menu.classList.remove('navigation--closed');
    menu.classList.add('navigation--opened');
  }
};
