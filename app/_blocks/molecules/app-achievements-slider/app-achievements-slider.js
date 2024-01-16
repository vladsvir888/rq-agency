// script
export default function initAchievementsSlider() {
  const slider = document.querySelector('.achievements-slider');

  if (!slider) return;

  Object.assign(slider, {
    slidesPerView: 3.15,
    spaceBetween: 24,
  });

  slider.initialize();
}