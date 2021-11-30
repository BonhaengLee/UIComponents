const $scrollIcon = document.querySelector('.scroll-icon');

const throttle = (callback, delay) => {
  let timerId;

  return () => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, delay);
  };
};

window.onscroll = throttle(() => {
  if (window.pageYOffset < 100) $scrollIcon.style.display = 'none';
  else $scrollIcon.style.display = 'block';
}, 100);

$scrollIcon.onclick = () => window.scrollTo(0, 0);
