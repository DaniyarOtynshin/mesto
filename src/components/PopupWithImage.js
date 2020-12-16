import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imageTitle = this._popup.querySelector('.popup-image__title');
        this._popupWithImage = this._popup.querySelector('.popup-image__image');
    };

    open( {name, link} ) {
        this._imageTitle.textContent = name;
        this._popupWithImage.setAttribute('src', link);
        this._popupWithImage.setAttribute('alt', name);
        super.open();
    };
}