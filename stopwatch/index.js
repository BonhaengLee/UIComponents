const $display = document.querySelector('.display');
const $start = document.querySelector('button.control:nth-of-type(1)');
const $reset = document.querySelector('button.control:nth-of-type(2)');
const $laps = document.querySelector('.laps');

(() => {
  let timeoutId = null;
  let isStop = false;
  let count = 0;

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

  const start = () => {
    timeoutId = setInterval(p, 10);
    $reset.textContent = 'Lap';
  };

  const stop = () => {
    clearTimeout(timeoutId);
    $reset.textContent = 'Reset';
  };

  $start.onclick = () => {
    isStop = !isStop;
    $start.textContent = isStop ? 'Stop' : 'Start';
    isStop ? start() : stop();
    $reset.disabled = '';
  };

  $reset.onclick = () => {
    if (!isStop) {
      $display.textContent = '00:00:00';
      $laps.innerHTML = '';
    } else {
      if (!count) $laps.innerHTML += `<div class="lap-title">Laps</div><div class="lap-title">Time</div>`;
      $laps.innerHTML += `<div>${++count}</div><div>${$display.textContent}</div>`;
    }
  };
})();
