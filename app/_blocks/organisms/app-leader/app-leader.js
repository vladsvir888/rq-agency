// script
export default function initLeaderSlider() {
  const slider = document.querySelector('.leader__slider');

  if (!slider) return;

  Object.assign(slider, {
    slidesPerView: 1.6,
    spaceBetween: 30,
    navigation: {
      prevEl: document.querySelector('.slider-controls__button--prev'),
      nextEl: document.querySelector('.slider-controls__button--next'),
    },
    pagination: {
      el: '.slider-controls__pagination',
      clickable: true,
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
      paginationBulletMessage: 'Перейти к слайду {{index}}',
    },
    breakpoints: {
      601: {
        slidesPerView: 3,
      },
    },
  });

  slider.initialize();
}