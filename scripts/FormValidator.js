export class FormValidator{
    constructor(parameters, formToValidate) {
        this._parameters = parameters;
        this._form = formToValidate;
    }

    _showInputError(formElement, inputElement, errorMessage, parameters) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        inputElement.classList.add(parameters.inputErrorClass);
        errorElement.classList.add(parameters.errorClass);
    };

    _hideInputError(formElement, inputElement, parameters) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = '';
        inputElement.classList.remove(parameters.inputErrorClass);
        errorElement.classList.remove(parameters.errorClass);
    };

    _checkInputValidity(formElement, inputElement, parameters) {
      const inputNotVaild = !inputElement.validity.valid
      if (inputNotVaild) {
        const errorMessage = inputElement.validationMessage;
        this._showInputError(formElement, inputElement, errorMessage, parameters);
      } else {
        this._hideInputError(formElement, inputElement, parameters);
      }
    };

    _toggleButtonState(inputList, buttonElement, parameters) {
      const hasInvalidInput = inputList.some(
        (inputElement) => !inputElement.validity.valid
      );
      if (hasInvalidInput) {
          buttonElement.classList.add(parameters.inactiveButtonClass);
          buttonElement.setAttribute('disabled', true)
      } else {
          buttonElement.classList.remove(parameters.inactiveButtonClass);
          buttonElement.removeAttribute('disabled')
      }
    };

    _setEventListeners(formElement, parameters) {
        const inputList = Array.from(formElement.querySelectorAll(parameters.inputSelector));
        const buttonElement = formElement.querySelector(parameters.submitButtonSelector);
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(formElement, inputElement, parameters);
            this._toggleButtonState(inputList, buttonElement, parameters);
          });
        });
        this._toggleButtonState(inputList, buttonElement, parameters);
    };

    enableValidation() {
        this._setEventListeners(this._form, this._parameters);
    }


}