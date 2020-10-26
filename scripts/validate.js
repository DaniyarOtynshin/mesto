const showInputError = (formElement, inputElement, errorMessage, params) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(params.inputErrorClass);
    errorElement.classList.add(params.errorClass);
};
  
const hideInputError = (formElement, inputElement, params) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(params.inputErrorClass);
    errorElement.classList.remove(params.errorClass);
};

const checkInputValidity = (formElement, inputElement, params) => {
  const inputNotVaild = !inputElement.validity.valid
  if (inputNotVaild) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formElement, inputElement, errorMessage, params);
  } else {
    hideInputError(formElement, inputElement, params);
  }
};

const toggleButtonState = (inputList, buttonElement, params) => {
  const hasInvalidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid
  );
  if (hasInvalidInput) {
      buttonElement.classList.add(params.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true)
  } else {
      buttonElement.classList.remove(params.inactiveButtonClass);
      buttonElement.removeAttribute('disabled')
  }
};

const setEventListeners = (formElement, params) => {
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const buttonElement = formElement.querySelector(params.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, params);
        toggleButtonState(inputList, buttonElement, params);
      });
    });
    toggleButtonState(inputList, buttonElement, params);
  };

const enableValidation = (params) => {
    const formList = Array.from(document.querySelectorAll(params.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, params);
    });
  };

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_active'
});