// eslint-disable-next-line import/no-unresolved
import { register } from 'swiper/element/bundle';

import initAchievementsSlider from '../_blocks/molecules/app-achievements-slider/app-achievements-slider';
import initHeroSlider from '../_blocks/organisms/app-hero/app-hero';
import initLeaderSlider from '../_blocks/organisms/app-leader/app-leader';
import '../_blocks/organisms/app-contacts/app-contacts';
import initWhatWeDoOfferSlider from '../_blocks/organisms/app-what-we-do-offer/app-what-we-do-offer';
import initCasesSlider from '../_blocks/organisms/app-some-cases/app-some-cases';
import initNewsSlider from '../_blocks/organisms/app-relevant-news/app-relevant-news';
import initResultsSlider from '../_blocks/organisms/app-results/app-results';

register();

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--scrollbar-width', `${window.innerWidth - document.documentElement.clientWidth}px`);

  initAchievementsSlider();
  initHeroSlider();
  initLeaderSlider();
  initWhatWeDoOfferSlider();
  initCasesSlider();
  initNewsSlider();
  initResultsSlider();
});
