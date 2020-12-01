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

    render() {
        this._content = this._getTemplate();
        const elementImage = this._content.querySelector('.element__image');
        elementImage.setAttribute('alt', this._name);
        elementImage.setAttribute('src', this._link);
        elementImage.addEventListener('click', this._handleCardClick);
        this._content.querySelector('.element__title').textContent = this._name;
        this._content.querySelector('.element__button').addEventListener('click', this._handleLike);
        this._content.querySelector('.element__delete').addEventListener('click', this._handleDelete);
        return this._content;
    };
}
