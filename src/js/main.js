import "./_vendor";
import "./_functions";
import "./_components";
import Const from "./const";

import uaParser from "./components/ua-parser";
// import preloader from "./components/animation/preloader";

import articleSlider from "./components/sliders/articleSlider";

import scrollTarget from "./components/scrollTarget";
import copyLink from "./components/copyLink";

document.addEventListener("DOMContentLoaded", function () {
  uaParser();
  /* if (
    document.querySelectorAll(".preloader")
      .length
  ) {
    preloader();
  } */

  if (
    document.querySelectorAll(".js-news-slider")
      .length
  ) {
    articleSlider();
  }

  scrollTarget();
  copyLink();
});

window.const = Const;
window.articleSlider = articleSlider;
