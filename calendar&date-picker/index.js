const $calendar = document.querySelector('.calendar');
const $datePicker = document.querySelector('.date-picker');
const $month = document.querySelector('.month');
const $year = document.querySelector('.year');
const $prev = document.querySelector('.left');
const $next = document.querySelector('.right');

const MONTH = [
  'January',
  'February',
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

$month.textContent = MONTH[today.getMonth()];
$year.textContent = today.getFullYear();

$datePicker.onclick = () => {
  $calendar.style.display = 'block';
};

window.onclick = e => {
  if (e.target.matches('.calendar *') || e.target.matches('.calendar') || e.target.matches('.date-picker')) return;
  $calendar.style.display = 'none';
};

let month = today.getMonth();
let year = today.getFullYear();
const day = today.getDate();

document.body.onload = () => {
  $next.onclick = () => {
    if (month === 11) {
      month = 0;
      year++;
    } else {
      month++;
    }
    $month.textContent = MONTH[month];
    $year.textContent = year;
  };

  $prev.onclick = () => {
    if (month === 0) {
      month = 11;
      year--;
    } else {
      month--;
    }
    $month.textContent = MONTH[month];
    $year.textContent = year;
  };
};
