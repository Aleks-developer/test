import Swiper, {Pagination} from "swiper";

const articleSlider = () => {
  Swiper.use([Pagination]);

  const articleSliderSwiper = new Swiper(".js-news-slider", {
    slidesPerView: 1,
    loop: false,
    speed: 750,
    pagination: {
      el: ".news-slider__pagination",
      type: "bullets",
      clickable: true,
      /* type: "custom",
      renderCustom: function (swiper, current, total) {
        let result = "<div class='slider-pagination__wrap'>";
        for (let i = 1; i <= total; i++) {
          if (current === i) {
            result += `<span class="slider-pagination__circle active"></span>`;
          } else {
            result += `<span class="slider-pagination__circle"></span>`;
          }
        }
        result += "</div>";
        return result;
      }, */
    },
  });

  if (viewport().width > 767) {
    articleSliderSwiper.destroy();
  }
};

export default articleSlider;
