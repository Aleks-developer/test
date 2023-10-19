import Inputmask from "inputmask";

const inputMask = () => {
  const phoneSelector = document.querySelectorAll(".phone-mask");
  const inputMail = document.querySelectorAll(".mail-mask");
  const calendarSelector = document.querySelectorAll(".calendar-mask");
  let inputSettings = true;

  for (let currentPhoneSelector of phoneSelector) {
    if (currentPhoneSelector.classList.contains("static")) {
      inputSettings = false;
    }
    const phoneMask = new Inputmask("+7 (999) 999-99-99", {
      clearMaskOnLostFocus: inputSettings,
    });
    phoneMask.mask(currentPhoneSelector);
  }

  for (let currentInputMail of inputMail) {
    const currentInputMail = new Inputmask({
      alias: "email"
    });
    currentInputMail.mask(currentInputMail);
  }

  for (let currentCalendarSelector of calendarSelector) {
    const calendarMask = new Inputmask("99.99.9999", {
      clearMaskOnLostFocus: true,
    });
    calendarMask.mask(currentCalendarSelector);
  }
};
inputMask();
