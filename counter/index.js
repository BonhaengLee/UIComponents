const $increaseButton = document.querySelector('.increase');
const $decreaseButton = document.querySelector('.decrease');
const $counter = document.querySelector('.counter');

const counter = (() => {
  let count = 0;

  return predicate => {
    count = predicate(count);
    return count;
  };
})();

const increase = n => n + 1;
const decrease = n => (n > 0 ? n - 1 : 0);

$increaseButton.onclick = () => {
  $counter.textContent = counter(increase);
};

$decreaseButton.onclick = () => {
  $counter.textContent = counter(decrease);
};
