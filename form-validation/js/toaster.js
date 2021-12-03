export const toaster = {
  add({ type, title, message }) {
    const toastEl = document.createElement('div');
    toastEl.classList.add('toast', `toast-${type}`);

    toastEl.innerHTML = `<h4 class="toast-heading">${title}</h4>
                          <div class="toast-message">
                            <svg width="24" height="24">
                                <use xlink:href="#${type}" />
                              </svg>
                            <p>${message}</p>
                            </div>
                          <a class="close">&times;</a>`;
    document.body.appendChild(toastEl);

    setTimeout(() => document.body.removeChild(toastEl), 3000);

    const $toast = document.querySelectorAll('.toast');
    let len = $toast.length;

    [...$toast].forEach(toast => {
      toast.style.bottom = `${(len - 1) * 100}px`;
      len--;
    });
  },
};

export const TOAST_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
};

export const createToastAction = (type, title, message) => ({ type, title, message });

// Button click Event Handlers
// document.querySelector('.show-success').onclick = () =>
//   toaster.add(createToastAction(TOAST_TYPE.SUCCESS, 'Well done!', 'This is a success alert'));

// document.querySelector('.show-error').onclick = () =>
//   toaster.add(createToastAction(TOAST_TYPE.ERROR, 'Check it out!', 'This is a error alert'));

// document.querySelector('.show-warning').onclick = () =>
//   toaster.add(createToastAction(TOAST_TYPE.WARNING, 'Check it out!', 'This is a warning alert'));
