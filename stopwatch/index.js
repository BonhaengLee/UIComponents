const $display = document.querySelector('.display');
const $start = document.querySelector('button.control:nth-of-type(1)');
const $reset = document.querySelector('button.control:nth-of-type(2)');

const p = (function () {
  let mm = 0;
  let ss = 0;
  let ms = 0;

  const printTime = () => {
    let mmVal = 0;
    let ssVal = 0;
    let msVal = 0;

    if (mm < 10) {
      mmVal = '0' + mm;
    } else mmVal = mm;
    if (ss < 10) {
      ssVal = '0' + ss;
    } else ssVal = ss;
    if (ms < 10) {
      msVal = '0' + ms;
    } else msVal = ms;

    if (ms < 99) {
      ms++;
    } else {
      ms = 0;
      ss++;
      if (ss === 60) {
        ss = 0;
        mm++;
      }
    }
    $display.textContent = `${mmVal}:${ssVal}:${msVal}`;
  };
  return printTime;
})();

let id = null;

function start() {
  id = setInterval(p, 10);
}

function stop() {
  clearTimeout(id);
}

let toggle = false;
$start.onclick = () => {
  // console.log('on');
  toggle = !toggle;
  $start.textContent = toggle ? 'Stop' : 'Start';
  toggle ? start() : stop();
  // if ($start.textContent === 'Stop') clearInterval(timeoutId);
};
