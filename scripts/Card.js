import { openPopup } from "./utils.js";
import { popupImage } from "./constants.js";

export class Card {
    constructor(data, cardSelector) {
        this._name = data.name,
        this._link = data.link,
        this._cardSelector = cardSelector
    }

    _getTemplate() {
        const _cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return _cardElement
    }

    _handleLike = () => {
        this._content.querySelector('.element__button').classList.toggle('element__button_active');
    }
    
    _handleDelete = () => {
        this._content.remove();
        this._content = null;
    }

    _handleImagePopup(event) {
        openPopup(popupImage);
        popupImage.querySelector('.popup-image__image').setAttribute('src', this._link);
        popupImage.querySelector('.popup-image__title').textContent = this._name;
    }

    render(container) {
        this._content = this._getTemplate();
        const elementImage = this._content.querySelector('.element__image');
        elementImage.setAttribute('alt', this._name);
        elementImage.setAttribute('src', this._link);
        elementImage.addEventListener('click', this._handleImagePopup);
        this._content.querySelector('.element__title').textContent = this._name;
        this._content.querySelector('.element__button').addEventListener('click', this._handleLike);
        this._content.querySelector('.element__delete').addEventListener('click', this._handleDelete);
        container.prepend(this._content);
    }
}
