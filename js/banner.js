var swiper = new Swiper(".container-banner", {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,

  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});