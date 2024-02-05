/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { register } from 'swiper/element';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { MaskInput } from 'maska';
import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import createSlider from './helpers/createSlider';
import '../_blocks/organisms/app-contacts/app-contacts';
import initDialog from '../_blocks/molecules/app-dialog/app-dialog';
import initFilterBlock from '../_blocks/molecules/app-filter-block/app-filter-block';
import initMenu from '../_blocks/organisms/app-header/app-header';

document.addEventListener('DOMContentLoaded', () => {
  register();

  new MaskInput('[type="tel"]', {
    mask: '+7(###)###-##-##',
  });

  createSlider([
    {
      selector: '.achievements-slider',
      options: {
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
      },
    },
    {
      selector: '.hero__slider',
      options: {
        modules: [Navigation, Pagination, A11y],
        spaceBetween: 25,
        navigation: {
          prevEl: document.querySelector('.slider-controls__button--prev'),
          nextEl: document.querySelector('.slider-controls__button--next'),
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
          prevEl: document.querySelector('.slider-controls__button--prev'),
          nextEl: document.querySelector('.slider-controls__button--next'),
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
          prevEl: document.querySelector('.slider-controls__button--prev'),
          nextEl: document.querySelector('.slider-controls__button--next'),
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
          1201: {
            slidesPerView: 5,
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
          prevEl: document.querySelector('.slider-controls__button--prev'),
          nextEl: document.querySelector('.slider-controls__button--next'),
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
  ]);

  initDialog();
  initFilterBlock();
  initMenu();
});
