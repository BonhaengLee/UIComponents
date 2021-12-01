const $accordion = document.querySelector('.accordion');
const $menuContainer = document.querySelector('.menu-container');

$accordion.onclick = e => {
  [...$accordion.children].forEach(menu => {
    $accordion.classList.toggle('active', menu === e.target);
  });
  console.log($accordion.children);
};

const render = () => {
  [...$accordion.children].forEach(menuContainer => {
    const $subMenu = menuContainer.children[1];
    const $div = [...$subMenu.children];
    console.log($div);

    for (const x of $div) {
      console.log(x.children[0].style.transition);
      x.children[0].style.transition = 'none !important';
    }
    $subMenu.style.transition = menuContainer.classList.contains('active') && 'none !important';
    $subMenu.style.height = menuContainer.classList.contains('active') && `${$subMenu.scrollHeight}px`;
  });
};

render();

/* 트랜지션 취소 */
// .notransition {
//   transition: none !important;
// }
