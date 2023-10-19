const titleAnim = () => {
  /* const titleAnimArray = document.querySelectorAll(
    "" +
    "main h1," +
    "main h2," +
    "main h3" +
    ""
  );
  for (let i = 0; i < titleAnimArray.length; i++) {
    titleAnimArray[i].classList.add("title-anim");
  } */

  const title = document.querySelectorAll(".title-anim");
  let delayS = 0;

  for (let i = 0; i < title.length; i++) {
    title[i].setAttribute("data-aos", "slide-up");
  }

  for (let i = 0; i < title.length; i++) {
    const text = title[i].innerHTML;
    let str = text.split('\n').join('');
    let strNew = str.split(/\s|&nbsp;/g).join(' ');
    let arrFinal = strNew.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);

    delayS = 0;

    if (arrFinal) {
      title[i].innerHTML = "";
      arrFinal.forEach(function(item, y, arr) {
        if (item !== "") {
          title[i].innerHTML += "<div><span style='transition-delay:"+ delayS +"ms'>" + item + "</span></div> ";
          delayS = delayS + 100;
        }
      });
    }
  }
};
if (document.querySelectorAll(".title-anim").length) {
  titleAnim();
}
