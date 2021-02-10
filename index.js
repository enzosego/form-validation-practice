const submitButton = document.getElementById('submit');
const eMail = document.getElementById('email');
const country = document.getElementById('country');
const code = document.getElementById('code');
const password = document.getElementById('password');
const passConfirm = document.getElementById('pass-confirm');

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const numberOnlyRegex = /^[0-9]*$/gm;
const lettersOnlyRegex = /^[a-z]*$/gmi;

const checkInputs = () => {
  if (eMail.value === '') {
    toggleErrorClass(eMail.parentElement);
  } else if (!regExp.test(eMail.value)) {
    toggleNotValidClass(eMail.parentElement);
  } else {
    toggleValidInputClass(eMail.parentElement);
  }

  if (country.value === '') {
    toggleErrorClass(country.parentElement);
  } else if (!lettersOnlyRegex.test(country.value)) {
    toggleNotValidClass(country.parentElement);
  } else {
    toggleValidInputClass(country.parentElement);
  }

  if (code.value === '') {
    toggleErrorClass(code.parentElement);
  } else if (!numberOnlyRegex.test(code.value)) {
    toggleNotValidClass(code.parentElement);
  } else {
    toggleValidInputClass(code.parentElement);
  }

  if (password.value === '') {
    toggleErrorClass(password.parentElement);
  } else if (password.value.length < 6) {
    toggleTooShortClass(password.parentElement);
  } else if (password.value.length > 20) {
    toggleTooLongClass(password.parentElement);
  } else {
    toggleValidInputClass(password.parentElement);
  }

  if (passConfirm.value === '') {
    toggleErrorClass(passConfirm.parentElement);
  } else if (passConfirm.value !== password.value) {
    toggleNotValidClass(passConfirm.parentElement);
  } else {
    toggleValidInputClass(passConfirm.parentElement);
  }
}

submitButton.addEventListener('click', () => {
  checkInputs();
});

function toggleErrorClass(node) {
  checkClasses(node);
  node.classList.add('error');
}

function toggleNotValidClass(node) {
  checkClasses(node);
  node.classList.add('not-valid');
}

function toggleTooShortClass(node) {
  checkClasses(node);
  node.classList.add('too-short');
}

function toggleTooLongClass(node) {
  checkClasses(node);
  node.classList.add('too-long');
}

function toggleValidInputClass(node) {
  checkClasses(node);
  node.classList.add('valid-input');
}

function checkClasses(node) {
  if (node.classList.contains('not-valid')) {
    node.classList.remove('not-valid');
  } else if (node.classList.contains('too-short')) {
    node.classList.remove('too-short');
  } else if (node.classList.contains('too-long')) {
    node.classList.remove('too-long');
  } else if (node.classList.contains('error')) {
    node.classList.remove('error');
  } else if (node.classList.contains('valid-input')) {
    node.classList.remove('valid-input');
  }
}
