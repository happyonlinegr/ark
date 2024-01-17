window.addEventListener("load", (event) => {

    var home_top_swiper = new Swiper(".home-top-swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

    var home_bottom_swiper = new Swiper(".home-bottom-swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });

    var philosophy_top_swiper = new Swiper(".philosophy-top-swiper", {
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  });
  });