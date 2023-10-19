const inputFocus = () => {
  const input = document.querySelectorAll('input.form-control:not(.static)');
  const textarea = document.querySelectorAll('textarea.form-control:not(.static)');

  const addFocus = (input) => {
    input.classList.add('is-focus');
  };
  const removeFocus = (input) => {
    input.classList.remove('is-focus');
  };

  const toggleFocus = () => {
    for (let currentInput of input) {
      if (currentInput.value !== '') {
        addFocus(currentInput);
      }
    }

    for (let currentTextarea of textarea) {
      if (currentTextarea.value !== '') {
        addFocus(currentTextarea);
      }
    }
  };
  toggleFocus();

  for (let currentInput of input) {
    currentInput.addEventListener('focus', function () {
      addFocus(currentInput);
    });
    currentInput.addEventListener('focusout', function () {
      if (currentInput.value === '') {
        removeFocus(currentInput);
      }
    });
  }

  for (let currentTextarea of textarea) {
    currentTextarea.addEventListener('focus', function () {
      addFocus(currentTextarea);
    });
    currentTextarea.addEventListener('focusout', function () {
      if (currentTextarea.value === '') {
        removeFocus(currentTextarea);
      }
    });
  }
};
inputFocus();
