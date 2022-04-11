# JS LIBRARIES

## Swiper

CDN JS
https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.0.9/swiper-bundle.min.js

CDN CSS
https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.0.9/swiper-bundle.css

Markup structure

Structure:

        .swiper-container
            .swiper-wrapper
                .swiper-slide
                .swiper-slide
                .swiper-slide

        If we need, we can use :
            .swiper-pagination
            .swiper-button-prev
            .swiper-button-next
            .swiper-scrollbar
        These don't need to be in the swiper container. Only make sure you call them in the JS ny their name.

JS:

```js

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

```



