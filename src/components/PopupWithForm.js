import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm, renderer) {
        super(popupSelector);
        this._submitForm = submitForm;
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
          this._submitForm(this._getInputValues());
          this.close();
        });
    };

    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
    };

    open() {
        this._renderer(this._popup.querySelector('.popup__form'));
        super.open();
    }
}