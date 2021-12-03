import { toaster, createToastAction, TOAST_TYPE } from './toaster.js';

const $signupLink = document.querySelector('.signin a');
const $signinLink = document.querySelector('.signup a');
const $signin = document.querySelector('.signin');
const $signup = document.querySelector('.signup');

function FormValidator(form, fields) {
  this.form = form;
  this.fields = fields;
}

FormValidator.prototype.setFieldsFlags = function () {
  this.fieldsConfirm = this.fields.reduce((acc, cur) => {
    acc[cur] = false;
    return acc;
  }, {});
};

FormValidator.prototype.validateOnSubmit = function () {
  this.form.addEventListener('submit', e => {
    e.preventDefault();
    const self = this;
    console.log(
      this.fields.reduce((acc, field) => {
        const $input = document.querySelector(`#${field}`);
        self.validateFields($input);
        acc[field] = $input.value;
        return acc;
      }, {})
    );
    toaster.add(createToastAction(TOAST_TYPE.SUCCESS, 'Well done!', 'This is a success alert'));
  });
};

FormValidator.prototype.validateOnEntry = function () {
  this.fields.forEach(field => {
    const $input = document.querySelector(`#${field}`);
    const self = this;
    $input.addEventListener('input', () => {
      self.validateFields($input);
    });
  });
};

FormValidator.prototype.validateFields = function (field) {
  if (field.value.trim() === '') {
    this.setStatus(field, `${field.name} 입력은 필수 항목입니다.`, 'error');
    return;
  }

  if (field.id === 'signup-userid' || field.id === 'signin-userid') {
    const re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (re.test(field.value)) {
      this.setStatus(field, null, 'success');
    } else {
      this.setStatus(field, '이메일 형식에 맞게 입력해 주세요.', 'error');
    }
  }
  if (field.id === 'signup-name') {
    const re = /.+/g;
    if (re.test(field.value)) {
      this.setStatus(field, null, 'success');
    } else {
      this.setStatus(field, '이름을 입력해 주세요.', 'error');
    }
  }
  if (field.id === 'signin-password' || field.id === 'signup-password') {
    const re = /^[0-9a-z]{6,12}$/;
    if (re.test(field.value)) {
      this.setStatus(field, null, 'success');
    } else {
      this.setStatus(field, '영문 또는 숫자를 6 ~ 12자 입력하세요.', 'error');
    }
  }
  if (field.id === 'signup-confirm-password') {
    const passwordField = this.form.querySelector('#signup-password');

    if (field.value !== passwordField.value) {
      this.setStatus(field, `패스워드가 일치하지 않습니다.`, 'error');
    } else {
      this.setStatus(field, null, 'success');
    }
  }
};

FormValidator.prototype.setStatus = function (field, message, type) {
  const successIcon = field.parentElement.querySelector('.icon-success.bx.bxs-check-circle');
  const errorIcon = field.parentElement.querySelector('.icon-error.bx.bxs-x-circle');
  const errorMessage = field.parentElement.querySelector('div.error');

  if (type === 'success') {
    this.fieldsConfirm[field.id] = true;
    if (errorIcon) {
      errorIcon.classList.add('hidden');
    }
    if (errorMessage) {
      errorMessage.innerText = '';
    }
    successIcon.classList.remove('hidden');
    field.parentElement.classList.remove('error');
  }
  if (type === 'error') {
    this.fieldsConfirm[field.id] = false;
    if (successIcon) {
      successIcon.classList.add('hidden');
    }
    errorMessage.innerText = message;
    errorIcon.classList.remove('hidden');
    field.parentElement.classList.add('error');
  }

  const $submitButton = this.form.querySelector('.button');
  if (Object.values(this.fieldsConfirm).every(el => el)) {
    $submitButton.removeAttribute('disabled');
  } else {
    $submitButton.setAttribute('disabled', true);
  }
};

$signupLink.onclick = () => {
  $signin.classList.add('hidden');
  $signup.classList.remove('hidden');
  const signupFields = ['signup-userid', 'signup-name', 'signup-password', 'signup-confirm-password'];
  const validator = new FormValidator($signup, signupFields);
  validator.setFieldsFlags();
  validator.validateOnSubmit();
  validator.validateOnEntry();
};

$signinLink.onclick = () => {
  $signup.classList.add('hidden');
  $signin.classList.remove('hidden');
};

const signinFields = ['signin-userid', 'signin-password'];
const validator = new FormValidator($signin, signinFields);
validator.setFieldsFlags();
validator.validateOnSubmit();
validator.validateOnEntry();
