import Wow from "wow.js";

window.wowJsAnimation = () => {
  const imgLazy = document.querySelectorAll("img[loading='lazy']:not(.static)");
  for (let i = 0; i < imgLazy.length; i++) {
    imgLazy[i].classList.add("wow");
  }

  window.wow = new Wow({
    boxClass: "wow",
  });
  wow.init();
};
wowJsAnimation();
