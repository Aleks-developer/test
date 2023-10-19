import {throttle} from './throttle';

const fixFullHeight = () => {
  window.vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
let fixHeight = throttle(fixFullHeight);

fixHeight();
window.fixHeight = fixHeight;

window.addEventListener('resize', () => {
  if (viewport().width > 1279) {
    fixHeight();
  }
});
window.addEventListener('orientationchange', () => {
  if (viewport().width > 1279) {
    fixHeight();
  }
});
