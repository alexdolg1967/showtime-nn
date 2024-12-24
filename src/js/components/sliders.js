document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".thimbs-slider-1")) {
    var thimbs1 = new Swiper(".thimbs-slider-1", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 7,
      slidesPerView: 9,
      speed: 2800,
      watchSlidesProgress: true,
      breakpoints: {
        600: { direction: "vertical" },
      },
    });
    var chooseSlider1 = new Swiper(".choose-slider-1", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 2800,
      breakpoints: {
        600: { direction: "vertical" },
      },
      autoplay: {
        delay: 5000,
      },
      thumbs: {
        swiper: thimbs1,
      },
    });
  }

  if (document.querySelector(".thimbs-slider-2")) {
    var thimbs2 = new Swiper(".thimbs-slider-2", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 7,
      slidesPerView: 9,
      speed: 2800,
      watchSlidesProgress: true,
      breakpoints: {
        600: { direction: "vertical" },
      },
    });
    var chooseSlider2 = new Swiper(".choose-slider-2", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 2800,
      breakpoints: {
        600: { direction: "vertical" },
      },
      autoplay: {
        delay: 5000,
      },
      thumbs: {
        swiper: thimbs2,
      },
    });
  }

  if (document.querySelector(".thimbs-slider-3")) {
    var thimbs3 = new Swiper(".thimbs-slider-3", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 7,
      slidesPerView: 9,
      speed: 2800,
      watchSlidesProgress: true,
      breakpoints: {
        600: { direction: "vertical" },
      },
    });
    var chooseSlider3 = new Swiper(".choose-slider-3", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 2800,
      breakpoints: {
        600: { direction: "vertical" },
      },
      autoplay: {
        delay: 5000,
      },
      thumbs: {
        swiper: thimbs3,
      },
    });
  }

  if (document.querySelector(".thimbs-slider-4")) {
    var thimbs4 = new Swiper(".thimbs-slider-4", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 7,
      slidesPerView: 9,
      speed: 2800,
      watchSlidesProgress: true,
      breakpoints: {
        600: { direction: "vertical" },
      },
    });
    var chooseSlider4 = new Swiper(".choose-slider-4", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 2800,
      breakpoints: {
        600: { direction: "vertical" },
      },
      autoplay: {
        delay: 5000,
      },
      thumbs: {
        swiper: thimbs4,
      },
    });
  }

  if (document.querySelector(".thimbs-slider-5")) {
    var thimbs5 = new Swiper(".thimbs-slider-5", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 7,
      slidesPerView: 9,
      speed: 2800,
      watchSlidesProgress: true,
      breakpoints: {
        600: { direction: "vertical" },
      },
    });
    var chooseSlider5 = new Swiper(".choose-slider-5", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 2800,
      breakpoints: {
        600: { direction: "vertical" },
      },
      autoplay: {
        delay: 5000,
      },
      thumbs: {
        swiper: thimbs5,
      },
    });
  }

  if (document.querySelector(".thimbs-slider-6")) {
    var thimbs6 = new Swiper(".thimbs-slider-6", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 7,
      slidesPerView: 9,
      speed: 2800,
      watchSlidesProgress: true,
      breakpoints: {
        600: { direction: "vertical" },
      },
    });
    var chooseSlider6 = new Swiper(".choose-slider-6", {
      loop: true,
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 2800,
      breakpoints: {
        600: { direction: "vertical" },
      },
      autoplay: {
        delay: 5000,
      },
      thumbs: {
        swiper: thimbs6,
      },
    });
  }

  if (document.querySelector(".thimbs-usluga")) {
    var thimbsUsluga = new Swiper(".thimbs-usluga", {
      // loop: true,
      direction: "horizontal",
      spaceBetween: 10,
      slidesPerView: 9,
      speed: 2800,
      watchSlidesProgress: true,
      breakpoints: {
        1200: { direction: "vertical" },
        spaceBetween: 20,
      },
    });
    var uslugaSlider = new Swiper(".usluga-slider", {
      // loop: true,
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 2800,
      breakpoints: {
        1200: { direction: "vertical" },
      },
      autoplay: {
        delay: 4600,
      },
      thumbs: {
        swiper: thimbsUsluga,
      },
    });
  }

  if (document.querySelector(".studio-slider1")) {
    const studioThimb1 = new Swiper(".studio-thumb-slider1", {
      // loop: true,
      direction: "horizontal",
      spaceBetween: 3,
      slidesPerView: 20,
      speed: 1800,
      watchSlidesProgress: true,
      // breakpoints: {
      //   600: { direction: "vertical" },
      // },
    });
    const studioSlider1 = new Swiper(".studio-slider1", {
      // loop: true,
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 1800,
      // breakpoints: {
      //   600: { direction: "vertical" },
      // },
      autoplay: {
        delay: 4200,
      },
      thumbs: {
        swiper: studioThimb1,
      },
    });
  }
  if (document.querySelector(".studio-slider2")) {
    const studioThimb2 = new Swiper(".studio-thumb-slider2", {
      // loop: true,
      direction: "horizontal",
      spaceBetween: 3,
      slidesPerView: 20,
      speed: 1800,
      watchSlidesProgress: true,
      // breakpoints: {
      //   600: { direction: "vertical" },
      // },
    });
    const studioSlider1 = new Swiper(".studio-slider2", {
      // loop: true,
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 1,
      speed: 1800,
      // breakpoints: {
      //   600: { direction: "vertical" },
      // },
      autoplay: {
        delay: 4200,
      },
      thumbs: {
        swiper: studioThimb2,
      },
    });
  }

  if (document.querySelector(".reviews-slider")) {
    const reviewsSlider = new Swiper(".reviews-slider", {
      // loop: true,
      grabCursor: true,
      direction: "horizontal",
      slidesPerView: 2.8,
      spaceBetween: 20,
      speed: 1500,
      breakpoints: {
        320: { slidesPerView: 1 },
        567: { slidesPerView: 1.5 },
        768: { slidesPerView: 1.75 },
        1024: { slidesPerView: 2 },
        1200: { slidesPerView: 2.8 },
        1400: { slidesPerView: 3 },
      },
      navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
      },
    });
  }
});
