// script
export default function initDialog() {
  const openButtons = document.querySelectorAll('.js-dialog-button');
  const closeButtons = document.querySelectorAll('.js-dialog-close');

  if (!openButtons.length || !closeButtons.length) {
    return;
  }

  openButtons.forEach((openButton) => {
    openButton.addEventListener('click', () => {
      const dialog = document.querySelector(`.js-dialog[data-dialog="${openButton.dataset.dialog}"]`);

      if (dialog) {
        dialog.show();
      }
    });
  });

  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      const dialog = closeButton.closest('.js-dialog');

      if (dialog) {
        dialog.hide();
      }
    });
  });
}
