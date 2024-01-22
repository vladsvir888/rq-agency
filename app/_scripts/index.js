// eslint-disable-next-line import/no-unresolved
import { register } from 'swiper/element/bundle';

import initAchievementsSlider from '../_blocks/molecules/app-achievements-slider/app-achievements-slider';
import initHeroSlider from '../_blocks/organisms/app-hero/app-hero';
import initLeaderSlider from '../_blocks/organisms/app-leader/app-leader';

register();

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--scrollbar-width', `${window.innerWidth - document.documentElement.clientWidth}px`);

  initAchievementsSlider();
  initHeroSlider();
  initLeaderSlider();
});
