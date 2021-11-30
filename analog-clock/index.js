const $hour = document.querySelector(".hour");
const $minute = document.querySelector(".minute");
const $second = document.querySelector(".second");

setInterval(() => {
  const day = new Date();
  const h = day.getHours() * 30;
  const m = day.getMinutes() * 6;
  const s = day.getSeconds() * 6;

  $hour.style.transform = `rotateZ(${h}deg)`;
  $minute.style.transform = `rotateZ(${m}deg)`;
  $second.style.transform = `rotateZ(${s}deg)`;
}, 1000);
