// ----------our team swiper-----------
const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabcursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // -----------products swiper----------
  const products = new Swiper(".product-slider-wrapper", {
    loop: true,
    grabcursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      
      768: {
        slidesPerView: 3,
      },
      992:{
        slidesPerView:4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  });


