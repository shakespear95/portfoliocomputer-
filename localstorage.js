const storeFrom = document.querySelector('form');
const email = document.getElementById('email-address');
const userName = document.getElementById('user-name');
const message = document.getElementById('msg');
const object = {};

window.addEventListener('DOMContentLoaded', () => {
  const userInput = JSON.parse(localStorage.getItem('data'));
  if (userInput !== null) {
    userName.value = userInput.nameID;
    email.value = userInput.mail;
    message.value = userInput.msg;
  }
});

// Add to localStorage
storeFrom.addEventListener('input', () => {
  object.nameID = userName.value;
  object.mail = email.value;
  object.msg = message.value;
  localStorage.setItem('data', JSON.stringify(object));
});
