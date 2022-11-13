const hamburger = document.querySelector(".hamburger");
const navul = document.querySelector(".nav-ul");
const bottom = document.querySelector(".nav-list2");
const popButton = document.querySelectorAll('.work-button');
const popModal = document.querySelector('.buttonmob');
const closeButton = document.querySelector('.close-button');
const Overlay = document.querySelector('.active');



closeButton.addEventListener('click', () => {
    popModal.classList.toggle("active");
})

popButton.forEach(x => (
    x.addEventListener('click', () => {
        // Do something if any of the four button is clicked
        console.log('Button Clicked');
        popModal.classList.toggle("active");
        Overlay.classList.toggle("active");
    })
));


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navul.classList.toggle("active");
    bottom.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navul.classList.remove("active");
}
))



