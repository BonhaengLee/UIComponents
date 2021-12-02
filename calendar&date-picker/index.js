const $calendar = document.querySelector('.calendar');
const $datePicker = document.querySelector('.date-picker');
const $month = document.querySelector('.month');
const $year = document.querySelector('.year');
const $left = document.querySelector('.left');
const $right = document.querySelector('.right');

const MONTH = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const today = new Date();
console.log(today);

$month.textContent = MONTH[today.getMonth()];
$year.textContent = today.getFullYear();

$datePicker.onclick = () => {
  $calendar.style.display = 'block';
};

window.onclick = e => {
  if (e.target.matches('.calendar *') || e.target.matches('.calendar') || e.target.matches('.date-picker')) return;
  $calendar.style.display = 'none';
};

let monthCount = 1;
let yearCount = 1;

$left.onclick = () => {
  $month.textContent = MONTH[today.getMonth() - monthCount];
  console.log(monthCount);
  monthCount++;
  if (monthCount === 12) {
    monthCount = 0;
    console.log(yearCount);
    $year.textContent = today.getFullYear() - yearCount;
    yearCount++;
  }
};
