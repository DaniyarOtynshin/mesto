import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    };

    open( {name, link} ) {
        this._popup.querySelector('.popup-image__title').textContent = name;
        this._popup.querySelector('.popup-image__image').setAttribute('src', link);
        super.open();
    };
}