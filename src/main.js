import "./styles/main.scss";
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 10, 
      disableOnInteraction: false, 
    },
    centeredSlides: true,
    loop: true, 
    pagination: {
      el: ".swiper-pagination",
    }
});

var swiper = new Swiper(".swiperSkillsBig", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  slidesPerView: 5,
  spaceBetween: 30,
  grabCursor: true,
  mousewheel: true,
  freeMode: {
    enabled: true,
    sticky: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 2000,
  autoplay: {
    delay: 0,
  },
  loop: true,
});

// SWIPER SKILLS
var swiper = new Swiper(".swiperSkillsSmall", {
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
    clickable: true,
  },
  speed: 2000,
  autoplay: {
    delay: 0,
  },
  loop: true,
});