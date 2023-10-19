import vars from "../_vars";
import {throttle} from './throttle';

window.rootFullHeight = () => {
  // --headerHeight
  const header = document.querySelector('.header');
  if (header) {
    window.headerHeight = header.offsetHeight;
    vars.htmlEl.style.setProperty('--headerHeight', `${headerHeight}px`);
  }

  // --bannerHeight
  const banner = document.querySelector('.banner');
  if (banner) {
    window.bannerHeight = banner.offsetHeight;
    vars.htmlEl.style.setProperty('--bannerHeight', `${bannerHeight}px`);
  }
};
let rootHeight = throttle(rootFullHeight);

window.rootHeaderHeight = () => {
  const header = document.querySelector('.header');
  if (header) {
    window.headerHeight = header.offsetHeight;
    vars.htmlEl.style.setProperty('--headerHInit', `${headerHeight}px`);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  rootHeight();
  rootHeaderHeight();
});

window.addEventListener('resize', rootHeight);
window.addEventListener('orientationchange', rootHeight);
window.addEventListener('scroll', () => {
  setTimeout(() => {
    rootHeight();
  }, 300);
});
