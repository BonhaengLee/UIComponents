const $hour = document.querySelector('.hand.hour');
const $minute = document.querySelector('.hand.minute');
const $second = document.querySelector('.hand.second');

setInterval(() => {
  const day = new Date();
  const h = day.getHours() * 30;
  const m = day.getMinutes() * 6;
  const s = day.getSeconds() * 6;

  $hour.style.setProperty('--deg', h);
  $minute.style.setProperty('--deg', m);
  $second.style.setProperty('--deg', s);
}, 1000);
