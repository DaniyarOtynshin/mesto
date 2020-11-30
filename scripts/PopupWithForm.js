import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm, ) {
        super(popupSelector);
        this._submitForm = submitForm;
    };

    _getInputValues() {
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
        this._formValues = {};
        console.log(this._inputList)
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
        return this._formValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (event) => {
          event.preventDefault();
          this._submitForm(this._getInputValues());
          this.close();
        });
    };

    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
    };
}