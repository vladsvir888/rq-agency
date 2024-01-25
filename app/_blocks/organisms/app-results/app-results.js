// script
export default function initResultsSlider() {
  const slider = document.querySelector('.results__slider');

  if (!slider) return;

  Object.assign(slider, {
    slidesPerView: 1,
    navigation: {
      prevEl: document.querySelector('.slider-controls__button--prev'),
      nextEl: document.querySelector('.slider-controls__button--next'),
    },
    pagination: {
      el: '.slider-controls__pagination',
      clickable: true,
    },
  });

  slider.initialize();
}