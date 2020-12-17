export default class FormValidator {
    constructor(parameters, formToValidate) {
        this._parameters = parameters;
        this._form = document.querySelector(formToValidate);
        this._submitButton = this._form.querySelector('.popup__submit-button');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    };

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = errorMessage;
        inputElement.classList.add(this._parameters.inputErrorClass);
        errorElement.classList.add(this._parameters.errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = '';
        inputElement.classList.remove(this._parameters.inputErrorClass);
        errorElement.classList.remove(this._parameters.errorClass);
    };

    _checkInputValidity(inputElement) {
        const inputNotVaild = !inputElement.validity.valid
            if (inputNotVaild) {
            const errorMessage = inputElement.validationMessage;
            this._showInputError(inputElement, errorMessage);
        } else {
            this._hideInputError(inputElement);
        };
    };

    _toggleButtonState() {
        if (this._checkInputsValidity()) {
            this._submitButton.classList.add(this._parameters.inactiveButtonClass);
            this._submitButton.setAttribute('disabled', true)
        } else {
            this._submitButton.classList.remove(this._parameters.inactiveButtonClass);
            this._submitButton.removeAttribute('disabled')
        };
    };

    _checkInputsValidity() {
        const hasInvalidInput = this._inputList.some(
            (inputElement) => !inputElement.validity.valid
        );
        return hasInvalidInput
        
    };

    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
        this._toggleButtonState();
    };

    disableSubmitButton() {
        this._submitButton.setAttribute('disabled', true);
        this._submitButton.classList.add('popup__submit-button_disabled'); 
    }

    resetErrors() {
        this._inputList.forEach((inputElement) => {
           this._hideInputError(inputElement);
        });
    }

    enableValidation() {
        this._setEventListeners();
    };
}