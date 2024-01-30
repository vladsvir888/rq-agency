export default function initMenu() {
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