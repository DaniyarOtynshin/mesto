export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_active');
    };

    close() {
        this._popup.classList.remove('popup_active');
        this._popup.removeEventListener('click', this._handleCloseByOverlay);
        document.removeEventListener('keyup', this._handleEscClose);
    };

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        };
    }

    _handleCloseByOverlay(event) {
        if (event.target == event.currentTarget) { 
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', this._handleCloseByOverlay);
        document.addEventListener('keyup', this._handleEscClose);
    }
}