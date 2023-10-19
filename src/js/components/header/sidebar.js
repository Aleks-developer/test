import {disableScroll} from '../../functions/disable-scroll';
import {enableScroll} from '../../functions/enable-scroll';
import vars from "../../_vars";

const sidebarInit = () => {
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');
  window.burgerBtn = document.querySelector('.js-burger');

  window.sidebarClose = () => {
    body.classList.remove('sidebarActive');
    burgerBtn.classList.remove('is-open');
  };

  burgerBtn.addEventListener('click', () => {
    vars.bodyEl.classList.toggle('sidebarActive');
    burgerBtn.classList.toggle('is-open');

    if (burgerBtn.classList.contains('is-open')) {
      disableScroll();
    } else {
      enableScroll();
    }
  });

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      sidebarClose();
    });
  }
};
if (document.querySelectorAll(".js-burger")
  .length) {
  sidebarInit();
}
