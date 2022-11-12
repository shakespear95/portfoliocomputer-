const hamburger = document.querySelector(".hamburger");
const navul = document.querySelector(".nav-ul");
const cancelbutton =document.querySelector(".cancelbutton");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navul.classList.toggle("active");
    cancelbutton.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navul.classList.remove("active");
}
))



