const $sideNav = document.getElementById('side-nav');
const $toggleButton = document.querySelector('.toggle.bx.bx-right-arrow-circle');
const $main = document.querySelector('main');

let toggle = false;

const render = () => {
  toggle = sessionStorage.getItem('toggle') === 'true';
  if (!toggle) return;

  $sideNav.classList.add('active', 'notransition');
  $toggleButton.classList.add('notransition');
  $main.classList.add('notransition');
};

$toggleButton.onclick = () => {
  $sideNav.classList.remove('notransition');
  $toggleButton.classList.remove('notransition');
  $main.classList.remove('notransition');

  toggle = sessionStorage.getItem('toggle') === 'true';
  sessionStorage.setItem('toggle', !toggle);

  if (!toggle) $sideNav.classList.add('active');
  else $sideNav.classList.remove('active');
};

window.addEventListener('DOMContentLoaded', render);
