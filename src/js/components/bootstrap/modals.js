import bootstrap from 'bootstrap/dist/js/bootstrap.min';
import {enableScroll} from "../../functions/enable-scroll";
import {disableScroll} from "../../functions/disable-scroll";
import vars from "../../_vars";

const modals = () => {
  const myModal = document.querySelectorAll('.modal');
  const modalButtons = document.querySelectorAll("[data-bs-toggle='modal']");

  for (let currentMyModal of myModal) {
    const modal = new bootstrap.Modal(
      currentMyModal, {}
    );

    currentMyModal.addEventListener('show.bs.modal', event => {
      if (viewport().width < 1280) {
        if (!vars.bodyEl.classList.contains("dis-scroll-full")) {
          disableScroll();
        }
      }
    });

    currentMyModal.addEventListener('shown.bs.modal', event => {
      const button = event.relatedTarget;

      currentMyModal.classList.add("is-open");
      if (button) {
        button.classList.add("isOpenModal");
      }
    });

    currentMyModal.addEventListener('hidden.bs.modal', event => {
      currentMyModal.classList.remove("is-open");
      for (let i = 0; i < modalButtons.length; i++) {
        modalButtons[i].classList.remove("isOpenModal");
      }
    });

    currentMyModal.addEventListener('hide.bs.modal', event => {
      if (viewport().width < 1280) {
        enableScroll();
      }
    });
  }

  for (let i = 0; i < myModal.length; i++) {
    const modalAnim = myModal[i].querySelectorAll('.modal-anim');
    for (let i = 0; i < modalAnim.length; i++) {
      modalAnim[i].style.transitionDelay = i * 0.3 + "s";
    }
  }

  window.onCloseForm = (modalId) => {
    bootstrap.Modal.getOrCreateInstance(document.getElementById(modalId)).hide();
  };

  window.onSuccessForm = () => {
    const myModalSuccess = new bootstrap.Modal(document.getElementById('successModal'), {});
    myModalSuccess.show();
  };
};
modals();
