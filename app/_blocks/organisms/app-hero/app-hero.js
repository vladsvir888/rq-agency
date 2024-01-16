// script
export default function initHeroSlider() {
  const slider = document.querySelector('.hero__slider');

  if (!slider) return;

  Object.assign(slider, {
    spaceBetween: 25,
    navigation: {
      prevEl: document.querySelector('.hero__button--prev'),
      nextEl: document.querySelector('.hero__button--next'),
    },
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
  });

  slider.initialize();
}