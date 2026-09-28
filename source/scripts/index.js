const menu = document.querySelector('.navigation');
const toggle = document.querySelector('.navigation__toggle');

menu.classList.remove('navigation--no-js');

toggle.onclick = () => {
  if (toggle.classList.contains('menu-toggle--open')) {
    toggle.classList.remove('menu-toggle--open');
    toggle.classList.add('menu-toggle--close');
    menu.classList.remove('navigation--closed');
    menu.classList.add('navigation--opened');
  } else {
    toggle.classList.remove('menu-toggle--close');
    toggle.classList.add('menu-toggle--open');
    menu.classList.remove('navigation--opened');
    menu.classList.add('navigation--closed');
  }
};
