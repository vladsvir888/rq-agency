// script
export default function initAchievementsSlider() {
  const slider = document.querySelector('.achievements-slider');

  if (!slider) return;

  Object.assign(slider, {
    slidesPerView: 1.15,
    spaceBetween: 24,
    breakpoints: {
      601: {
        slidesPerView: 1.75,
      },
      901: {
        slidesPerView: 2.5,
      },
      1201: {
        slidesPerView: 3.15,
      },
    },
  });

  slider.initialize();
}
