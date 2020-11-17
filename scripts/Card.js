import { openPopup } from "./utils.js";
import { popupImage } from "./constants.js";

export class Card {
    constructor(data) {
        this._name = data.name,
        this._link = data.link
    }

    _getTemplate() {
        const _cardElement = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
        return _cardElement
    }

    handleLike(event) {
        event.target.classList.toggle('element__button_active');
    }
    
    handleDelete(event) {
        const card = event.target.parentNode;
        card.remove();
    }

    handleImagePopup(event) {
        openPopup(popupImage);
        const card = event.target.parentNode;
        const link = card.querySelector('.element__image').getAttribute('src');
        const name = card.querySelector('.element__title').textContent;
        popupImage.querySelector('.popup-image__image').setAttribute('src', link);
        popupImage.querySelector('.popup-image__title').textContent = name;
    }

    render(container) {
        this._content = this._getTemplate();
        this._content.querySelector('.element__image').setAttribute('alt', this._name);
        this._content.querySelector('.element__image').setAttribute('src', this._link);
        this._content.querySelector('.element__image').addEventListener('click', this.handleImagePopup);
        this._content.querySelector('.element__title').textContent = this._name;
        this._content.querySelector('.element__button').addEventListener('click', this.handleLike);
        this._content.querySelector('.element__delete').addEventListener('click', this.handleDelete);
        container.prepend(this._content);
    }
}
