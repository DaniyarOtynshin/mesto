import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmitForm, renderer) {
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        this._renderer = renderer;
        this._form = this._popup.querySelector('.popup__form');
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
        });
    };

    close() {
        super.close();
        this._form.reset();;
    };

    open() {
        this._renderer(this._form);
        super.open();
    }
}