// script
export default function initHeroSlider() {
  const slider = document.querySelector('.hero__slider');

  if (!slider) return;

  Object.assign(slider, {
    spaceBetween: 25,
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
  });

  slider.initialize();
}