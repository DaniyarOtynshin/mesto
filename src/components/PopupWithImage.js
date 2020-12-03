import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    };

    open( {name, link} ) {
        this._popup.querySelector('.popup-image__title').textContent = name;
        const popupWithImage = this._popup.querySelector('.popup-image__image');
        popupWithImage.setAttribute('src', link);
        popupWithImage.setAttribute('alt', name);
        super.open();
    };
}