// script
export default function initWhatWeDoOfferSlider() {
  const slider = document.querySelector('.what-we-do-offer__slider');

  if (!slider) return;

  Object.assign(slider, {
    slidesPerView: 5,
    navigation: {
      prevEl: document.querySelector('.slider-controls__button--prev'),
      nextEl: document.querySelector('.slider-controls__button--next'),
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
  });

  slider.initialize();
}