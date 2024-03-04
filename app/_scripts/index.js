/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { register } from 'swiper/element';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { MaskInput } from 'maska';
import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@justinribeiro/lite-youtube';
import { createApp, reactive } from 'petite-vue';

import createSlider from './helpers/createSlider';

import '../_blocks/organisms/app-contacts/app-contacts';
import initDialog from '../_blocks/molecules/app-dialog/app-dialog';
import initFilterBlock from '../_blocks/molecules/app-filter-block/app-filter-block';
import { initMenu, initStickyHeader } from '../_blocks/organisms/app-header/app-header';
import initCookie from '../_blocks/atoms/app-cookie/app-cookie';

document.addEventListener('DOMContentLoaded', () => {
  register();

  const store = reactive({
    typeCreatedContent: '',
    setCreatedContent(type) {
      this.typeCreatedContent = type;
      this.scrollToTopSection();
    },
    resetCreatedContent() {
      this.typeCreatedContent = '';
      this.scrollToTopSection();
    },
    scrollToTopSection() {
      setTimeout(() => {
        document.querySelector('.created-content').scrollIntoView();
      }, 100);
    },
  });
  createApp({
    store,
  }).mount();

  new MaskInput('[type="tel"]', {
    mask: '+7(###)###-##-##',
  });

  createSlider([
    {
      selector: '.achievements-slider',
      options: {
        modules: [Navigation, A11y],
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
        navigation: {
          prevEl: '.achievements__button--prev',
          nextEl: '.achievements__button--next',
        },
        a11y: {
          prevSlideMessage: 'Предыдущий слайд',
          nextSlideMessage: 'Следующий слайд',
        },
      },
    },
    {
      selector: '.hero__slider',
      options: {
        modules: [Navigation, Pagination, A11y],
        spaceBetween: 25,
        navigation: {
          prevEl: '.slider-controls__button--prev',
          nextEl: '.slider-controls__button--next',
        },
        pagination: {
          el: '.slider-controls__pagination',
          clickable: true,
        },
        a11y: {
          prevSlideMessage: 'Предыдущий слайд',
          nextSlideMessage: 'Следующий слайд',
          paginationBulletMessage: 'Перейти к слайду {{index}}',
        },
      },
    },
    {
      selector: '.leader__slider',
      options: {
        modules: [Navigation, Pagination, A11y],
        slidesPerView: 1.6,
        spaceBetween: 30,
        navigation: {
          prevEl: '.slider-controls__button--prev',
          nextEl: '.slider-controls__button--next',
        },
        pagination: {
          el: '.slider-controls__pagination',
          clickable: true,
        },
        a11y: {
          prevSlideMessage: 'Предыдущий слайд',
          nextSlideMessage: 'Следующий слайд',
          paginationBulletMessage: 'Перейти к слайду {{index}}',
        },
        breakpoints: {
          601: {
            slidesPerView: 3,
          },
        },
      },
    },
    {
      selector: '.what-we-do-offer__slider',
      options: {
        modules: [Navigation, A11y],
        slidesPerView: 2,
        navigation: {
          prevEl: '.what-we-do-offer__slider-button--prev',
          nextEl: '.what-we-do-offer__slider-button--next',
        },
        a11y: {
          prevSlideMessage: 'Предыдущий слайд',
          nextSlideMessage: 'Следующий слайд',
        },
        breakpoints: {
          901: {
            slidesPerView: 3,
          },
          1201: {
            slidesPerView: 5,
          },
        },
        on: {
          click(swiper) {
            const { clickedIndex, clickedSlide } = swiper;
            const prevActiveSlide = document.querySelector('.what-we-do-offer__slide--active');

            if (prevActiveSlide) {
              prevActiveSlide.classList.remove('what-we-do-offer__slide--active');
            }

            clickedSlide.classList.add('what-we-do-offer__slide--active');

            const prevActiveContent = document.querySelector('.what-we-do-offer__content:not([hidden]');

            if (prevActiveContent) {
              prevActiveContent.hidden = true;
            }

            const currentActiveContent = document.querySelector(
              `.what-we-do-offer__content[data-slide-index="${clickedIndex}"]`,
            );

            if (currentActiveContent) {
              currentActiveContent.hidden = false;
            }
          },
        },
      },
    },
    {
      selector: '.some-cases__slider',
      options: {
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
      },
    },
    {
      selector: '.relevant-news__slider',
      options: {
        slidesPerView: 1.2,
        spaceBetween: 16,
        breakpoints: {
          901: {
            spaceBetween: 30,
            slidesPerView: 2,
          },
        },
      },
    },
    {
      selector: '.results__slider',
      options: {
        modules: [Navigation, Pagination, A11y],
        slidesPerView: 1,
        navigation: {
          prevEl: '.slider-controls__button--prev',
          nextEl: '.slider-controls__button--next',
        },
        pagination: {
          el: '.slider-controls__pagination',
          clickable: true,
        },
        a11y: {
          prevSlideMessage: 'Предыдущий слайд',
          nextSlideMessage: 'Следующий слайд',
          paginationBulletMessage: 'Перейти к слайду {{index}}',
        },
      },
    },
    {
      selector: '.created-content__slider',
      options: {
        modules: [Navigation, Pagination, A11y],
        slidesPerView: 1,
        a11y: {
          prevSlideMessage: 'Предыдущий слайд',
          nextSlideMessage: 'Следующий слайд',
        },
      },
    },
  ]);

  initDialog();
  initFilterBlock();
  initMenu();
  initStickyHeader();
  initCookie();
});
