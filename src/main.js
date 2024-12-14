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
      delay: 3000, // 3 seconds
      disableOnInteraction: false, // Keeps autoplay running after user interactions
    },
    loop: true, // Enables infinite loop
    pagination: {
      el: ".swiper-pagination",
    }
});