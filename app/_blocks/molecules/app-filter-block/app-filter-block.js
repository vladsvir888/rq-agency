export default function initFilterBlock() {
  const openButton = document.querySelector('.section__filter-button');
  const dialog = document.querySelector('.filter-block-wrapper');
  const closeButton = document.querySelector('.filter-block-wrapper__close');

  if (!openButton || !dialog || !closeButton) return;

  openButton.addEventListener('click', () => {
    openButton.ariaExpanded = true;
    dialog.classList.add('open');
    document.body.classList.add('scroll-lock');
  });

  closeButton.addEventListener('click', () => {
    openButton.ariaExpanded = false;
    dialog.classList.remove('open');
    document.body.classList.remove('scroll-lock');
  });
}
