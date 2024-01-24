// script
export default function initCasesSlider() {
  const slider = document.querySelector('.some-cases__slider');

  if (!slider) return;

  Object.assign(slider, {
    slidesPerView: 4,
    spaceBetween: 30,
  });

  slider.initialize();
}
