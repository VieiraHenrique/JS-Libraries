/* 

Check Swiper API for a complete description of the options
https://swiperjs.com/swiper-api

*/

const from = document.querySelector(".from");
const of = document.querySelector(".of");

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  grabCursor: true,

  on: {
    slideChange: function (swiper) {
      from.innerText = `0${this.realIndex + 1}`;
      of.innerText = `0${swiper.slides.length - 2}`;
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
