const hamburger = document.querySelector('.hamburger');
const navul = document.querySelector('.nav-ul');
const bottom = document.querySelector('.nav-link2');
const popButton = document.querySelectorAll('.work-button');
const popButton1 = document.querySelectorAll('.work-button1');
const popModal = document.querySelector('.buttonmob');
const popModaldesk = document.querySelector('.buttondesk');
const closeButton = document.querySelectorAll('.close-button');
const Overlay = document.querySelector('.active');
const workSection = document.querySelector('.work');
const homeSection = document.querySelector('.home');
const aboutsection = document.querySelector('.about-myself');
const contactform = document.querySelector('.form-container');
const headerpart = document.querySelector('header');
closeButton.forEach((x) => (
  x.addEventListener('click', () => {
  popModal.classList.toggle('active');
  popModaldesk.classList.toggle('active');
  workSection.classList.toggle('active');
  homeSection.classList.toggle('active');
  aboutsection.classList.toggle('active');
  contactform.classList.toggle('active');
  headerpart.classList.toggle('active');
  })
));
popButton.forEach((x) => (
  x.addEventListener('click', () => {
  // Do something if any of the four button is clicked
    popModal.classList.toggle('active');
    Overlay.classList.toggle('active');
    popModaldesk.classList.toggle('active');
    workSection.classList.toggle('active');
    homeSection.classList.toggle('active');
    aboutsection.classList.toggle('active');
    contactform.classList.toggle('active');
    headerpart.classList.toggle('active');

  })
));
popButton1.forEach((x) => (
  x.addEventListener('click', () => {
  // Do something if any of the four button is clicked
    popModaldesk.classList.toggle('active');
    Overlay.classList.toggle('active');
    popModaldesk.classList.toggle('active');
  })
));
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navul.classList.toggle('active');
  bottom.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navul.classList.remove('active');
}));
