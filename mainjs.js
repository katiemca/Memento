// scrolly navigation
let btn = document.querySelector('.nav-link1');
let el = document.querySelector('.bannerone');

let btn2 = document.querySelector('.nav-link2');
let el2 = document.querySelector('.bannertwo');

let btn3 = document.querySelector('.nav-link3');
let el3 = document.querySelector('.bannerthree');

btn.addEventListener('click', function () {
    el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});

btn2.addEventListener('click', function () {
    el2.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});

btn3.addEventListener('click', function () {
    el3.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});

// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink1 = document.querySelector(".nav-link1");
const navLink2 = document.querySelector(".nav-link2");
const navLink3 = document.querySelector(".nav-link3");

navLink1.addEventListener("click", closeMenu);
navLink2.addEventListener("click", closeMenu);
navLink3.addEventListener("click" ,closeMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
