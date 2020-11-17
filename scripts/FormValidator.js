export class FormValidator{
    constructor(parameters, formToValidate) {
        this._parameters = parameters;
        this._form = formToValidate;
    }

    _handleEditSubmit(event) {
        event.preventDefault();
        profileName.textContent = popupName.value;
        profileDescription.textContent = popupDescription.value;
        closePopup(event);
    }
    
    _handleAddSubmit(event) {
        event.preventDefault();
        const popupTitle = popupFirstLine.value;
        const popupLink = popupSecondLine.value;
        addCard({name: popupTitle, link: popupLink});
        closePopup(event);
        formAdd.reset()
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
          inputElement.addEventListener('input', function () {
            this._checkInputValidity(formElement, inputElement, params);
            this._toggleButtonState(inputList, buttonElement, params);
          });
        });
        this._toggleButtonState(inputList, buttonElement, params);
    };
    
    _enableValidation(params) {
        const formList = Array.from(document.querySelectorAll(params.formSelector));
        formList.forEach((formElement) => {
          formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
          });
          this._setEventListeners(formElement, params);
        });
    };

}