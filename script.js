const hamburger = document.querySelector(".hamburger");
const navul = document.querySelector(".nav-ul");
const bottom = document.querySelector(".nav-list2");


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



