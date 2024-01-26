// script
export default function initDialog() {
  const openButtons = document.querySelectorAll('.js-dialog-button');
  const dialog = document.querySelector('.dialog');
  const closeButton = document.querySelector('.dialog__close');

  if (!openButtons.length || !dialog || !closeButton) return;

  openButtons.forEach((openButton) => {
    openButton.addEventListener('click', () => dialog.show());
  });

  closeButton.addEventListener('click', () => dialog.hide());
}