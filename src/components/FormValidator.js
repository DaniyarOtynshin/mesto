export default class FormValidator {
    constructor(parameters, formToValidate) {
        this._parameters = parameters;
        this._form = document.querySelector(formToValidate);
    };

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
        };
    };

    _toggleButtonState(buttonElement, parameters, state) {
        if (state) {
            buttonElement.classList.add(parameters.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true)
        } else {
            buttonElement.classList.remove(parameters.inactiveButtonClass);
            buttonElement.removeAttribute('disabled')
        };
    };

    _checkInputsValidity(inputList, buttonElement, parameters) {
        const hasInvalidInput = inputList.some(
            (inputElement) => !inputElement.validity.valid
        );
        this._toggleButtonState(buttonElement, parameters, hasInvalidInput);
    };

    _setEventListeners(formElement, parameters) {
        const inputList = Array.from(formElement.querySelectorAll(parameters.inputSelector));
        const buttonElement = formElement.querySelector(parameters.submitButtonSelector);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement, parameters);
                this._checkInputsValidity(inputList, buttonElement, parameters);
            });
        });
        this._checkInputsValidity(inputList, buttonElement, parameters);
    };

    disableSubmitButton(popupSubmitButton) {
        const button = this._form.querySelector(popupSubmitButton)
        button.setAttribute('disabled', true);
        button.classList.add('popup__submit-button_disabled'); 
    }

    resetErrors() {
        const inputList = Array.from(this._form.querySelectorAll('.popup__input'));
        inputList.forEach((inputElement) => {
            const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
            errorElement.textContent = '';
            inputElement.classList.remove('popup__input_error');
            errorElement.classList.remove('popup__input-error_active');
        });
    }

    enableValidation() {
        this._setEventListeners(this._form, this._parameters);
    };
}