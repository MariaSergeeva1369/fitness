import Swiper, {Navigation} from 'swiper';
Swiper.use([Navigation]);

const sliderTrainersList = document.querySelector('.swiper');
const sliderFeedbackList = document.querySelector('.swiper-feedback');


if (sliderTrainersList) {
  const mySwiper = new Swiper(sliderTrainersList, {
    loop: true,

    navigation: {
      nextEl: '.swiper-button-trainers-next',
      prevEl: '.swiper-button-trainers-prev',
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

      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  const toSlide = () => {
    if (sliderTrainersList && window.innerWidth <= 1199 && window.innerWidth >= 768) {
      mySwiper.slideTo(4);
    } else if (sliderTrainersList && window.innerWidth <= 767) {
      mySwiper.slideTo(3);
    }
  };

  toSlide();

  window.addEventListener('resize', () => {
    toSlide();
  });
}

if (sliderFeedbackList) {
  const FeedbackSwiper = new Swiper(sliderFeedbackList, {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: false,

    navigation: {
      nextEl: '.swiper-button-feedback-next',
      prevEl: '.swiper-button-feedback-prev',
    },
  });

  FeedbackSwiper.slideTo(0);
}
