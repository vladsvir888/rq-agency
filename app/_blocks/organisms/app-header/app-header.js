export function initMenu() {
  const wrapper = document.querySelector('.header');
  const toggleButton = document.querySelector('.header__burger');

  if (!toggleButton || !wrapper) return;

  toggleButton.addEventListener('click', () => {
    if (!wrapper.classList.contains('open')) {
      toggleButton.ariaExpanded = true;
      wrapper.classList.add('open');
      document.body.classList.add('scroll-lock');
    } else {
      toggleButton.ariaExpanded = false;
      wrapper.classList.remove('open');
      document.body.classList.remove('scroll-lock');
    }
  });
}

export function initStickyHeader() {
  const header = document.querySelector('.header');

  if (!header) return;

  const observer = new IntersectionObserver(
    ([event]) => event.target.toggleAttribute('sticky', event.intersectionRatio < 1),
    {
      rootMargin: '-1px 0px 0px 0px',
      threshold: [1],
    },
  );

  observer.observe(header);
}