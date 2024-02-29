export default function createSlider(data) {
  if (!data.length) return;

  data.forEach((item) => {
    const sliders = document.querySelectorAll(item.selector);

    if (!sliders.length) return;

    sliders.forEach((slider) => {
      if (item.selector === '.created-content__slider') {
        Object.assign(slider, {
          ...item.options,
          pagination: {
            el: slider.parentElement.querySelector('.created-content__slider-pagination'),
            type: 'progressbar',
          },
          navigation: {
            prevEl: slider.parentElement.querySelector('.created-content__slider-button--prev'),
            nextEl: slider.parentElement.querySelector('.created-content__slider-button--next'),
          },
          on: {
            init(swiper) {
              const { hostEl } = swiper;
              const { parentElement } = hostEl;
              const typeContent = parentElement.dataset.block;
              const numberSlides = parentElement.querySelectorAll('swiper-slide').length;
              const currentElement = parentElement.querySelector('.created-content__slider-num--current');
              const totalElement = parentElement.querySelector('.created-content__slider-num--total');

              if (numberSlides !== 1) {
                totalElement.textContent = numberSlides;
              } else {
                currentElement.style.display = 'none';
                totalElement.style.display = 'none';
              }

              // eslint-disable-next-line operator-linebreak
              document.querySelector(`.created-content__button[data-block="${typeContent}"] > span`).textContent =
                numberSlides;
            },
            slideChange(swiper) {
              const { hostEl, realIndex } = swiper;
              const { parentElement } = hostEl;
              const currentElement = parentElement.querySelector('.created-content__slider-num--current');

              currentElement.textContent = realIndex + 1;
            },
          },
        });
      } else {
        Object.assign(slider, item.options);
      }

      slider.initialize();
    });
  });
}
