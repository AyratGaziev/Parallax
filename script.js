const cluods = document.querySelector(".cluods");
const rocks = document.querySelector(".rocks");
const ground = document.querySelector(".ground");
const sections = document.querySelectorAll("section");
const menuLink = document.querySelectorAll('a[href*="#"]');
const animElements = document.querySelectorAll(".anim");
const loader = document.querySelector(".loader");

document.addEventListener("DOMContentLoaded", () => {
    loader.style.display = "none";
});

//Secton elements animation

let options = {
    threshold: 1
};
let callback = function (entries, observer) {
    entries.forEach((entry) => {
        if (
            entry.isIntersecting &&
            entry.target.classList.contains("section__content-num") &&
            !entry.target.classList.contains("section_num-animated")
        ) {
            entry.target.classList.add("section_num-animated");
        } else if (
            entry.isIntersecting &&
            !entry.target.classList.contains("section_animated")
        ) {
            entry.target.classList.add("section_animated");
        }
    });
};
let observer = new IntersectionObserver(callback, options);

animElements.forEach((el) => {
    observer.observe(el);
});

// Parallax

document.addEventListener("scroll", (e) => {
    let move = Math.floor(window.scrollY / 5);
    ground.style.transform = `translateY(${move}px)`;
    cluods.style.transform = `translateY(-${move}px)`;

    let winCenter = window.scrollY + window.innerHeight / 2;

    sections.forEach((sec) => {
        let secCenter = sec.offsetTop + sec.offsetHeight / 2;
        if (winCenter > secCenter - 20) {
            menuLink.forEach((el) => el.classList.remove("clicked"));
            document
                .querySelector(`a[href*="#${sec.id}"]`)
                .classList.add("clicked");
        }
    });
});

//Smooth scroll

menuLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href");
        const block = document.querySelector(id);
        block.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
});
