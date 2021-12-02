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

// $calendarGrid.textContent =

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

// & : 이달의 1일의 요일
const firstDayOfThisMonth = new Date(year, month, 1).getDay();
// & : 이달의 마지막 날짜
const lastDateOfThisMonth = new Date(year, month + 1, 0).getDate();
// & : 저번달의 마지막 날짜
const lastDateOfLastMonth = new Date(year, month, 0).getDate();
// & : days-grid
const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
$calendarGrid.innerHTML = `<div class="days-grid">${dayOfWeek.map(v => `<div>${v}</div>`).join('')}</div>`;
// & : date-grid
const $dateGrid = document.createElement('div');
$dateGrid.classList.add('date-grid');
$calendarGrid.appendChild($dateGrid);

for (let i = 1; i <= firstDayOfThisMonth; i++) {
  $dateGrid.innerHTML += `<button><time datetime="2019-01-01">${
    lastDateOfLastMonth - firstDayOfThisMonth + i
  }</time></button>`;
}
for (let i = 1; i <= lastDateOfThisMonth; i++) {
  $dateGrid.innerHTML += `<button><time datetime="2019-01-01">${i}</time></button>`;
}
// $calendarGrid.innerHTML += '</div>';
console.log($calendarGrid.innerHTML);

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
