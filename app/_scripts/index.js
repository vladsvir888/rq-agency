/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-unresolved
import { register } from 'swiper/element/bundle';
import { MaskInput } from 'maska';
import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import initAchievementsSlider from '../_blocks/molecules/app-achievements-slider/app-achievements-slider';
import initHeroSlider from '../_blocks/organisms/app-hero/app-hero';
import initLeaderSlider from '../_blocks/organisms/app-leader/app-leader';
import '../_blocks/organisms/app-contacts/app-contacts';
import initWhatWeDoOfferSlider from '../_blocks/organisms/app-what-we-do-offer/app-what-we-do-offer';
import initCasesSlider from '../_blocks/organisms/app-some-cases/app-some-cases';
import initNewsSlider from '../_blocks/organisms/app-relevant-news/app-relevant-news';
import initResultsSlider from '../_blocks/organisms/app-results/app-results';
import initDialog from '../_blocks/molecules/app-dialog/app-dialog';
import initFilterBlock from '../_blocks/molecules/app-filter-block/app-filter-block';

document.addEventListener('DOMContentLoaded', () => {
  register();

  new MaskInput('[type="tel"]', {
    mask: '+7(###)###-##-##',
  });

  initAchievementsSlider();
  initHeroSlider();
  initLeaderSlider();
  initWhatWeDoOfferSlider();
  initCasesSlider();
  initNewsSlider();
  initResultsSlider();
  initDialog();
  initFilterBlock();
});
