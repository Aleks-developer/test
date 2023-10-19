import AOS from "aos";

const aosAnimation = () => {
  AOS.init({
    disable: function() {
      const maxWidth = 1280;
      return window.innerWidth < maxWidth;
    },
  });
};
aosAnimation();
