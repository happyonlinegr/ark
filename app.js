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

  var gather_top_swiper = new Swiper(".gather-top-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  var eat_drink_top_swiper = new Swiper(".eat-drink-top-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  var menu_top_swiper = new Swiper(".menu-top-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

});