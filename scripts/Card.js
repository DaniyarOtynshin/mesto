class Card {
    constructor(data, cardSelector) {
        this._name = data._name,
        this._link = data._link
        this._cardSelector = cardSelector
    }

    _getTemplate() {
        const cardElement = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
        return cardElement
    }

    createCard () {
        this._newCard = this._getTemplate();
        const elementImage = _newCard.querySelector('.element__image');
        elementImage.setAttribute('src', this._link);
        elementImage.setAttribute('alt', this._name);
        elementImage.addEventListener('click', handleImagePopup);
        newCard.querySelector('.element__title').textContent = this._name;
        newCard.querySelector('.element__button').addEventListener('click', handleLike);
        newCard.querySelector('.element__delete').addEventListener('click', handleDelete);
        addCard(newCard);
    }

    const addCard = function (newCard) {
        grid.prepend(newCard);
    }
}