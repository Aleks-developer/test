import Wow from "wow.js";
import AOS from "aos";

const preloader = () => {
  const body = document.querySelector("body");
  const layer = document.querySelector(".preloader");
  const preloaderLine = document.querySelector(".preloader-progress__line");
  const preloaderPercent = document.querySelector(".preloader-progress__percent");

  window.wow = new Wow({
    boxClass: "wow",
  });

  layer.classList.add("preloaderActive");

  const counting = setInterval(function () {
    let currval = parseInt(preloaderPercent.innerHTML);
    let percent = ++currval;

    if (currval < 100) {
      preloaderPercent.innerHTML = percent + "";
      preloaderLine.style.width = percent + "%";
    }
  }, 15);

  window.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      layer.classList.add("preloaderRemoving");

      clearInterval(counting);
      preloaderPercent.innerHTML = 100 + "";
      preloaderLine.style.width = 100 + "%";
    }, 1750);

    setTimeout(() => {
      body.classList.remove("loading");
      layer.classList.remove("preloaderActive", "preloaderRemoving");
      setTimeout(() => {
        wow.init();
        AOS.init({
          disable: function() {
            const maxWidth = 1280;
            return window.innerWidth < maxWidth;
          },
        });
        setTimeout(() => {
          stickyBlocks();
        }, 1000);
      }, 1);
    }, 2750);
  });
};

export default preloader;
