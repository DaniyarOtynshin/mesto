export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    };

    open() {
        this._popup.classList.add('popup_active');
        document.addEventListener('keyup', this._handleEscClose);
    };

    close() {
        this._popup.classList.remove('popup_active');
        document.removeEventListener('keyup', this._handleEscClose);
    };

    _handleEscClose (event) {
        if (event.key === 'Escape') {
            this.close();
        };
    };

    _handleCloseByOverlay(event) {
        if (event.target == event.currentTarget) { 
            this.close();
        };
    };

    setEventListeners() {
        this._popup.querySelector('.popup__button').addEventListener('click', this.close.bind(this));
        this._popup.addEventListener('mousedown', this._handleCloseByOverlay.bind(this));
    };
}