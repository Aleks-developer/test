import vars from "../../_vars";

const scrollFixed = () => {
  const header = document.querySelector(".header:not([data-view='static'])");

  const onLoadClass = () => {
    const scroll = vars.htmlEl.scrollTop;
    if (scroll > 0) {
      header.classList.add("scrolled");
    }
  }

  const onScroll = () => {
    const scroll = vars.htmlEl.scrollTop;

    if (scroll > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled")
    }
  }

  window.addEventListener('load', () => {
    if (header) {
      onLoadClass();
    }
  });
  window.addEventListener('scroll', () => {
    setTimeout(() => {
      if (header && !vars.bodyEl.classList.contains("dis-scroll-full")) {
        onScroll();
      }
    }, 1);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelectorAll(".header")
    .length) {
    scrollFixed();
  }
});
