import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

const sliderList = document.querySelector(['.swiper']);

if (sliderList) {
  const mySwiper = new Swiper(sliderList, {
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1066: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  const toSlide = () => {
    if (sliderList && window.innerWidth <= 1199 && window.innerWidth >= 768) {
      mySwiper.slideTo(4);
    } else if (sliderList && window.innerWidth <= 767) {
      mySwiper.slideTo(3);
    }
  };

  toSlide();

  window.addEventListener('resize', () => {
    toSlide();
  });

}
