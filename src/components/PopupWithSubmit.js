import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._submitHandler = submitHandler;
    }

    setSubmitAction(submitAction) {
        this._submitHandler = submitAction;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitHandler();
            this.close();
          });
    }
}