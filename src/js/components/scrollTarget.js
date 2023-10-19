const scrollTarget = () => {
  const anchors = document.querySelectorAll('a[href^="#target-"]');
  const anchorsSections = document.querySelectorAll('[id^="target-"]');
  const yOffset = document.querySelectorAll('.header').length ? document.querySelector('.header').offsetHeight : 0;

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href');
      const y = document.querySelector(blockID).getBoundingClientRect().top + window.pageYOffset - yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });

      /*document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });*/
    })
  }

  window.addEventListener('scroll', () => {
    const scrollDistance = window.pageYOffset;

    for (let i = 0; i < anchorsSections.length; i++) {
      if ((anchorsSections[i].getBoundingClientRect().top + scrollDistance - yOffset - (vh / 2)) <= scrollDistance) {
        const blockID = anchorsSections[i].getAttribute('id');

        for (let i = 0; i <= anchors.length - 1; i++) {
          anchors[i].classList.remove("active");
        }
        document.querySelector('a[href^="#'+ blockID +'"]').classList.add("active");
      }
    }
  });
};

export default scrollTarget;
