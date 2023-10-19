import ClipboardJS from "clipboard";
import vars from "../_vars";

const copyLink = () => {
  const windowLocationHref = window.location.href;
  const copyLinkButton = document.querySelectorAll('.js-copy-link');

  for (let i = 0; i < copyLinkButton.length; i++) {
    copyLinkButton[i].setAttribute("data-clipboard-text", windowLocationHref);

    const clipboard = new ClipboardJS(copyLinkButton[i]);
    clipboard.on("success", function (e) {
      vars.bodyEl.classList.add('copyLinkActive');
      setTimeout(() => {
        vars.bodyEl.classList.remove('copyLinkActive');
      }, 2500);
    });
  }
};

export default copyLink;
