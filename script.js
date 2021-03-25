// Parallax
const cluods = document.querySelector(".cluods");
const rocks = document.querySelector(".rocks");
const ground = document.querySelector(".ground");

document.addEventListener("scroll", (e) => {
    let move = Math.floor(window.scrollY / 5);
    ground.style.transform = `translateY(${move}px)`;
    cluods.style.transform = `translateY(-${move}px)`;
});
// Menu
const menuBtn = document.querySelectorAll(".menu__list-item");

menuBtn.forEach((el) => {
    el.addEventListener("click", () => {
        menuBtn.forEach((elem) => elem.classList.remove("selected"));
        el.classList.add("selected");
    });
});
//Smooth scroll
const menuLink = document.querySelectorAll('a[href*="#"]');

menuLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        menuLink.forEach((el) => el.classList.remove("clicked"));
        link.classList.add("clicked");
        const id = link.getAttribute("href");
        const block = document.querySelector(id);
        block.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});
