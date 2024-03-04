// script
export default function initCookie() {
  const COOKIE_KEY = 'rq_cookie_agreement';
  const cookiePanel = document.querySelector('.cookie-block');

  if (!cookiePanel) {
    return;
  }

  const buttons = cookiePanel.querySelectorAll('.cookie-block__button');

  if (!buttons.length) {
    return;
  }

  if (!localStorage.getItem(COOKIE_KEY)) {
    cookiePanel.hidden = false;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiePanel.hidden = true;

      localStorage.setItem(COOKIE_KEY, true);
    });
  });
}