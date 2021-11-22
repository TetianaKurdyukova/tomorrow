var swiper = new Swiper(".js-swiper", {
  spaceBetween: 11,
  slidesPerView: '1.38',
  allowTouchMove: true,
  loop: false,
  speed: 800,
  pagination: {
    el: '.swiper-scrollbar',
    type: 'progressbar',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    540: {
      slidesPerView: '2.6',
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: '3.9',
      spaceBetween: 57,
    },
  },
});