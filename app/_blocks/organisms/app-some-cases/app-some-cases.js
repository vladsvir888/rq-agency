// script
export default function initCasesSlider() {
  const slider = document.querySelector('.some-cases__slider');

  if (!slider) return;

  Object.assign(slider, {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      601: {
        slidesPerView: 2,
      },
      901: {
        slidesPerView: 3,
      },
      1201: {
        slidesPerView: 4,
      },
    },
  });

  slider.initialize();
}
