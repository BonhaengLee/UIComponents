const $calendar = document.querySelector('.calendar');
const $calendarGrid = document.querySelector('.calendar-grid');
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

$calendarGrid.textContent = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].join(' ');

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
console.log(month);
let year = today.getFullYear();
const day = new Date(year, month, 1).getDay();
console.log(day);
// 0 ~ 6

const date = new Date(year, month + 1, 0).getDate();

const dates = [];

for (let i = 1; i <= date; i++) {
  dates.push(i);
}
console.log(dates);

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
