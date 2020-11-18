export class FormValidator{
    constructor(parameters, formToValidate) {
        this._parameters = parameters;
        this._form = formToValidate;
    }

    _showInputError(formElement, inputElement, errorMessage, params) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        inputElement.classList.add(params.inputErrorClass);
        errorElement.classList.add(params.errorClass);
    };

    _hideInputError(formElement, inputElement, params) {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = '';
        inputElement.classList.remove(params.inputErrorClass);
        errorElement.classList.remove(params.errorClass);
    };

    _checkInputValidity(formElement, inputElement, params) {
      const inputNotVaild = !inputElement.validity.valid
      if (inputNotVaild) {
        const errorMessage = inputElement.validationMessage;
        this._showInputError(formElement, inputElement, errorMessage, params);
      } else {
        this._hideInputError(formElement, inputElement, params);
      }
    };

    _toggleButtonState(inputList, buttonElement, params) {
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

    _setEventListeners(formElement, params) {
        const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
        const buttonElement = formElement.querySelector(params.submitButtonSelector);
        inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this._checkInputValidity(formElement, inputElement, params);
            this._toggleButtonState(inputList, buttonElement, params);
          });
        });
        this._toggleButtonState(inputList, buttonElement, params);
    };

    enableValidation() {
        this._setEventListeners(this._form, this._parameters);
    }


}