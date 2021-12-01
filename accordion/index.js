const $accordion = document.querySelector('.accordion');
const $menuContainer = document.querySelector('.menu-container');
const $activeSubmenu = document.querySelector('.menu-container.active > .submenu');
// $activeSubmenu.style.transition = 'none';

$accordion.onclick = e => {
  [...$accordion.children].forEach(menu => {
    $accordion.classList.toggle('active', menu.matches(e.target));
    console.log(menu.textContent);
    console.log(e.target.textContent);
    console.log('');
  });
  console.log($accordion.children);
};

const render = () => {
  $activeSubmenu.style.transition = 'none';
  $activeSubmenu.style.height = `${$activeSubmenu.scrollHeight}px`;
};

render();

/* 트랜지션 취소 */
// .notransition {
//   transition: none !important;
// }
