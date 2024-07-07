
// Swiper starts
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".qoute", {
      loop: true,
      pagination: {
        clickable: true
      },
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
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
    autoplay: {
      delay: 5000,

    },

    coverflowEffect: {
      slideShadows: false,
      rotate: 0,
      stretch: -20,
      depth: 100,
      modifier: 2.5,
    },

    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    initialSlide: 1,
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    }
  })});
