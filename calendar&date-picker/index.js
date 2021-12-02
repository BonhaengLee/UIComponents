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

let thisMonth = today.getMonth();
let thisYear = today.getFullYear();

// & : days-grid
const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const showDate = (year, month) => {
  $calendarGrid.innerHTML = `<div class="days-grid">${dayOfWeek.map(v => `<div>${v}</div>`).join('')}</div>`;
  // & : date-grid
  const $dateGrid = document.createElement('div');
  $dateGrid.classList.add('date-grid');
  $calendarGrid.appendChild($dateGrid);
  // & : 이달의 1일의 요일
  const firstDayOfThisMonth = new Date(year, month, 1).getDay();
  // & : 이달의 마지막의 요일
  const lastDayOfThisMonth = new Date(year, month + 1, 0).getDay();
  // & : 이달의 마지막 날짜
  const lastDateOfThisMonth = new Date(year, month + 1, 0).getDate();
  // & : 저번달의 마지막 날짜
  const lastDateOfLastMonth = new Date(year, month, 0).getDate();

  console.log(year, month);

  for (let i = 1; i <= firstDayOfThisMonth; i++) {
    $dateGrid.innerHTML += `<button class="last-next"><time datetime="${month - 1 === -1 ? year - 1 : year}-${
      month - 1 === -1 ? '12' : month < 10 ? '0' + month : month
    }-${lastDateOfLastMonth - firstDayOfThisMonth + i}">${
      lastDateOfLastMonth - firstDayOfThisMonth + i
    }</time></button>`;
  }
  for (let i = 1; i <= lastDateOfThisMonth; i++) {
    if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
      $dateGrid.innerHTML += `<button class="now"><time datetime="${year}-${
        month + 1 < 10 ? '0' + (month + 1) : month + 1
      }-${i < 10 ? '0' + i : i}">${i}</time></button>`;
    } else
      $dateGrid.innerHTML += `<button><time datetime="${year}-${month + 1 < 10 ? '0' + (month + 1) : month + 1}-${
        i < 10 ? '0' + i : i
      }">${i}</time></button>`;
  }

  for (let i = 1; i <= 6 - lastDayOfThisMonth; i++) {
    $dateGrid.innerHTML += `<button class="last-next"><time datetime="${month + 1 === 12 ? year + 1 : year}-${
      month + 1 === 12 ? '01' : month + 1 < 10 ? '0' + (month + 2) : month + 2
    }-${i < 10 ? '0' + i : i}">${i}</time></button>`;
  }
};

document.body.onload = () => {
  const $calendar = document.querySelector('.calendar');
  const $calendarNav = document.querySelector('.calendar-nav');
  $calendar.style.setProperty('--calendar-width', '450px');
  $calendarNav.style.setProperty('--calendar-width', '450px');

  showDate(thisYear, thisMonth);

  $next.onclick = () => {
    if (thisMonth === 11) {
      thisMonth = 0;
      thisYear++;
    } else {
      thisMonth++;
    }
    showDate(thisYear, thisMonth);
    $month.textContent = MONTH[thisMonth];
    $year.textContent = thisYear;
  };

  $prev.onclick = () => {
    if (thisMonth === 0) {
      thisMonth = 11;
      thisYear--;
    } else {
      thisMonth--;
    }
    showDate(thisYear, thisMonth);
    $month.textContent = MONTH[thisMonth];
    $year.textContent = thisYear;
  };

  // $dateGrid.onclick = () => con
};
