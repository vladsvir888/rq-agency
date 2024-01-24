// script
export default function initNewsSlider() {
  const slider = document.querySelector('.relevant-news__slider');

  if (!slider) return;

  Object.assign(slider, {
    slidesPerView: 2,
    spaceBetween: 30,
  });

  slider.initialize();
}