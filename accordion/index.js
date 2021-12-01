const $accordion = document.querySelector('.accordion');
const $menu = document.querySelectorAll('.menu');

$accordion.onclick = e => {
  [...$accordion.children].forEach(menu => {
    $accordion.classList.toggle('active', menu === e.target);
    //   console.log(menu);
    // });
  });
  console.log($accordion.children);
  // console.log(e.target);
};
