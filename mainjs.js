// scrolly navigation
let btn = document.querySelector('.nav-link1');
let el = document.querySelector('.bannerone');

let btn2 = document.querySelector('.nav-link2');
let el2 = document.querySelector('.bannertwo');

let btn3 = document.querySelector('.nav-link3');
let el3 = document.querySelector('.bannerthree');

let btn4 = document.querySelector('.nav-link4');


btn.addEventListener('click', function () {
    el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});

btn2.addEventListener('click', function () {
    el2.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});

btn3.addEventListener('click', function () {
    el3.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});

btn4.addEventListener('click', function () {
    el.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
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

// carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

