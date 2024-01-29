// script
export default function initNewsSlider() {
  const slider = document.querySelector('.relevant-news__slider');

  if (!slider) return;

  Object.assign(slider, {
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
      901: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
    },
  });

  slider.initialize();
}