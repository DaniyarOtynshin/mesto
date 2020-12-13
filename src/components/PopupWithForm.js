import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm, renderer) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._renderer = renderer;
    };

    _getInputValues() {
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
        return this._formValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (event) => {
          event.preventDefault();
          this._handleSubmitForm(this._getInputValues());
          this.close();
        });
    };

    resetErrors(form) {
        const inputList = Array.from(form.querySelectorAll('.popup__input'));
        inputList.forEach((inputElement) => {
            const errorElement = form.querySelector(`#${inputElement.id}-error`);
            errorElement.textContent = '';
            inputElement.classList.remove('popup__input_error');
            errorElement.classList.remove('popup__input-error_active');
        });
    }

    close() {
        super.close();
        const form = this._popup.querySelector('.popup__form')
        form.reset();
        this.resetErrors(form);
    };

    open() {
        this._renderer(this._popup.querySelector('.popup__form'));
        super.open();
    }
}