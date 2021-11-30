const $body = document.querySelector('body');
const $toggleButton = document.querySelector('.toggle-button');

let flag = 'light';

const render = () => {
  flag = localStorage.getItem('theme', 'dark') === 'dark' ? 'dark' : 'light';
  if (flag === 'dark') $body.classList.add('dark');
  else $body.classList.remove('dark');
};

$toggleButton.onclick = () => {
  flag = flag === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', flag);

  render();
};

window.addEventListener('DOMContentLoaded', render);
