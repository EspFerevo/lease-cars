"use strict";

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000, // Автоматическая прокрутка каждые 3 секунды
    disableOnInteraction: false, // Не отключать после взаимодействия
  },
});
