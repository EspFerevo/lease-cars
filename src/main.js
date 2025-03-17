"use strict";

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // Автоматическая прокрутка каждые 3 секунды
    disableOnInteraction: false, // Не отключать после взаимодействия
  },
});


