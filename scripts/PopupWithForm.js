import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this.formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
        return this.formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (event) => {
          event.preventDefault();
          this._submitForm(this._getInputValues());
          this._popup.close();
        });
    }

    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
    }
}