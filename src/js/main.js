
// Swiper starts
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".qoute", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    });
  });
// Swiper ends

document.addEventListener('DOMContentLoaded', function () {
const swiper = new Swiper('.testimoni', {
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  autoplay: {
    delay: 5000,

  },

  coverflowEffect: {
    rotate: 0,
    stretch: -20,
    depth: 100,
    modifier: 1.5,
  },

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
})});
