function FormValidator(form, fields) {
  this.form = form;
  this.fields = fields;
}

FormValidator.prototype.validateOnSubmit = function () {
  this.form.addEventListener('submit', e => {
    e.preventDefault();
    const self = this;
    this.fields.forEach(field => {
      const input = document.querySelector(`#${field}`);
      self.validateFields(input);
    });
  });
};

FormValidator.prototype.validateOnEntry = function () {
  this.fields.forEach(field => {
    const $input = document.querySelector(`#${field}`);
    const self = this;
    $input.addEventListener('input', event => {
      self.validateFields($input);
    });
  });
};

FormValidator.prototype.validateFields = function (field) {
  if (field.value.trim() === '') {
    this.setStatus(field, `${field.name} is required.`, 'error');
  } else {
    this.setStatus(field, null, 'success');
  }
  // & : type = text (=== email)
  if (field.type === 'text') {
    const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (re.test(field.value)) {
      this.setStatus(field, null, 'success');
    } else {
      this.setStatus(field, 'Email is not valid', 'error');
    }
  }
  if (field.id === 'signin-password') {
    const re = /^[0-9a-z]{6,12}$/;

    if (re.test(field.value)) {
      this.setStatus(field, null, 'success');
    } else {
      this.setStatus(field, 'Password is not valid', 'error');
    }
  }
  // & : password-confirm (signup)
  // if (field.id === 'signup-confirm-password') {
  //   const passwordField = this.form.querySelector('#password');

  //   if (field.value.trim() === '') {
  //     this.setStatus(field, `password confirmation is required.`, 'error');
  //   } else if (field.value !== passwordField.value) {
  //     this.setStatus(field, `password confirmation is not matched.`, 'error');
  //   } else {
  //     this.setStatus(field, null, 'success');
  //   }
  // }
};

FormValidator.prototype.setStatus = function (field, message, type) {
  const successIcon = field.parentElement.querySelector('.icon-success.bx.bxs-check-circle');
  const errorIcon = field.parentElement.querySelector('.icon-error.bx.bxs-x-circle');
  const errorMessage = field.parentElement.querySelector('div.error');

  if (type === 'success') {
    if (errorIcon) {
      errorIcon.classList.add('hidden');
    }
    if (errorMessage) {
      errorMessage.innerText = '';
    }
    successIcon.classList.remove('hidden');
    field.parentElement.classList.remove('error'); //
  }
  if (type === 'error') {
    if (successIcon) {
      successIcon.classList.add('hidden');
    }
    errorMessage.innerText = message;
    errorIcon.classList.remove('hidden');
    field.parentElement.classList.add('error'); //
  }
};

const form = document.querySelector('.form');
const fields = ['signin-userid', 'signin-password'];
const validator = new FormValidator(form, fields);
validator.validateOnSubmit();
validator.validateOnEntry();
