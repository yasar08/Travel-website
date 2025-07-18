const swiper1 = new Swiper(".swiper1", {
    slidesPerView: 2,
    spaceBetween: 35,
    slidesPerGroup: 1,
    Loop: true,
    fade: true,
    centerSlide: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    

    autoplay: {
        delay: 5000,
    },

    speed: 400,

    breakpoints: {

         320: {
            slidesPerView: 1,
         },

         768: {
            slidePerView: 2,
         },

         968: {
            slidePerView: 2,
         }
    }
});






  var swiper2 = new Swiper(".swiper2", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });



  
  

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
