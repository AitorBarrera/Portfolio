import "./styles/main.scss";
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

var swiper = new Swiper(".mySwiper", { 
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".swiperSkillsBig", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  mousewheel: true,
  freeMode: {
    enabled: true,
    sticky: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  speed: 2000,
  autoplay: {
    delay: 0,
  },
  loop: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@2.00": {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

// SWIPER SKILLS
var swiper = new Swiper(".swiperSkillsSmall", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 2,
  spaceBetween: 70,
  grabCursor: true,
  mousewheel: true,
  freeMode: {
    enabled: true,
    sticky: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  speed: 2000,
  autoplay: {
    delay: 0,
  },
  loop: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@2.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});