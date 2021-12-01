const $accordion = document.querySelector('.accordion');
const $activeSubmenu = document.querySelector('.menu-container.active > .submenu');

$accordion.onclick = ({ target }) => {
  [...$accordion.children].forEach(menu => {
    menu.classList.toggle('active', menu === target.closest('.menu-container'));

    if (menu === target.closest('.menu-container')) {
      menu.children[1].style.transition = 'height 0.4s ease';
      menu.children[1].style.height = `${$activeSubmenu.scrollHeight}px`;
    } else menu.children[1].style.height = `0`;
  });
};

const render = () => {
  $activeSubmenu.style.transition = 'none';
  $activeSubmenu.style.height = `${$activeSubmenu.scrollHeight}px`;
};

document.addEventListener('DOMContentLoaded', render);
