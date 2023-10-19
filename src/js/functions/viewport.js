const viewport = () => {
  let e = window;
  let a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return {width: e[`${a}Width`], height: e[`${a}Height`]};
};

window.addEventListener('resize', () => {
  viewport();
});

window.addEventListener('orientationchange', () => {
  viewport();
});

export default viewport;
