export default class Card {
    constructor({ data, handleCardClick, handleLikeClick, handleDislikeClick, handleDeleteClick }, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this.owner = data.owner;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDislikeClick = handleDislikeClick;
        this._handleDeleteClick = handleDeleteClick;
        this._cardSelector = cardSelector;
    };

    _getTemplate() {
        const _cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return _cardElement
    };

    _handleLike = () => {
        const likeButton = this._content.querySelector('.element__button')
        if (likeButton.classList.contains('element__button_active')) {
            likeButton.classList.toggle('element__button_active');
            this._content.querySelector('.element__likes').textContent = --this._likes.length
            this._handleDislikeClick(this._id);
        } else {
            likeButton.classList.toggle('element__button_active');
            this._content.querySelector('.element__likes').textContent = ++this._likes.length
            this._handleLikeClick(this._id);
        }
    };

    inactivateDelete() {
        this._content.querySelector('.element__delete').classList.add('element__delete_inactive');
    }

    handleToggleLike(likes) {
        this._content.querySelector('.element__button').classList.toggle('element__button_active');
        this._content.querySelector('.element__likes').textContent = likes;
    }

    handleDelete = () => {
        this._content.remove();
        this._content = null;
    };

    _setEventListeners() {
        this._elementImage.addEventListener('click', this._handleCardClick);
        this._content.querySelector('.element__button').addEventListener('click', this._handleLike);
        this._content.querySelector('.element__delete').addEventListener('click', this._handleDeleteClick);
    }

    render() {
        this._content = this._getTemplate();
        this._elementImage = this._content.querySelector('.element__image');
        this._elementImage.setAttribute('alt', this._name);
        this._elementImage.setAttribute('src', this._link);
        this._content.querySelector('.element__title').textContent = this._name;
        this._content.querySelector('.element__likes').textContent = this._likes.length;
        this._setEventListeners();
        return this._content;
    };
}
