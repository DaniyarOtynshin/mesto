export default class Card {
    constructor({ data, handleCardClick }, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._cardSelector = cardSelector;
    };

    _getTemplate() {
        const _cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return _cardElement
    };

    _handleLike = () => {
        this._content.querySelector('.element__button').classList.toggle('element__button_active');
    };

    _handleDelete = () => {
        this._content.remove();
        this._content = null;
    };

    _setEventListeners(card) {
        card.querySelector('.element__image').addEventListener('click', this._handleCardClick);
        card.querySelector('.element__button').addEventListener('click', this._handleLike);
        card.querySelector('.element__delete').addEventListener('click', this._handleDelete);
    }

    render() {
        this._content = this._getTemplate();
        const elementImage = this._content.querySelector('.element__image');
        elementImage.setAttribute('alt', this._name);
        elementImage.setAttribute('src', this._link);
        this._content.querySelector('.element__title').textContent = this._name;
        this._setEventListeners(this._content);
        return this._content;
    };
}
