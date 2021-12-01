function FormValidator(form, fields) {
  this.form = form;
  this.fields = fields;
}

FormValidator.prototype.validateOnSubmit = function () {
  this.form.addEventListener('submit', e => {
    e.preventDefault();
    const self = this;
    this.fields.forEach(field => {
      console.log(field);

      const input = document.querySelector(`#${field}`);
      self.validateFields(input);
    });
  });
};

FormValidator.prototype.validateOnEntry = function () {
  this.fields.forEach(field => {
    const input = document.querySelector(`#${field}`);
    const self = this;
    input.addEventListener('input', event => {
      // console.log(event);

      self.validateFields(input);
    });
  });
};

FormValidator.prototype.validateFields = function (field) {
  // console.log('vF', field.value, this.setStatus, field.value.trim() === '');
  // console.log(field);

  if (field.value.trim() === '') {
    this.setStatus(field, `${field.name} is required.`, 'error');
  } else {
  }
};

FormValidator.prototype.setStatus = function (field, message, type) {
  const successIcon = field.parentElement.querySelector('.icon-success.bx.bxs-check-circle');
  const errorIcon = field.parentElement.querySelector('.icon-error.bx.bxs-x-circle');
  const errorMessage = field.parentElement.querySelector('div.error');
  console.log(field, successIcon, errorIcon, errorMessage);

  if (type === 'success') {
    if (errorIcon) {
      errorIcon.classList.add('hidden');
    }
    if (errorMessage) {
      errorMessage.innerText = '';
    }
    successIcon.classLiter.remove('hidden');
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
