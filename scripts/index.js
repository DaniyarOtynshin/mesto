const popupAdd = document.querySelector('.popup-add');
const popupEdit = document.querySelector('.popup-edit');
const popupImage = document.querySelector('.popup-image');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const popupName = popupEdit.querySelector('[name="name"]');
const popupDescription = popupEdit.querySelector('[name="description"]');

const popupFirstLine = popupAdd.querySelector('[name="title"]');
const popupSecondLine = popupAdd.querySelector('[name="link"]');

const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
const addButton = document.querySelector('.profile__add-button');
const formEdit = document.querySelector('.popup__card');
const formAdd = document.querySelector('.popup-add__card');
const imageCloseButton = document.querySelector('.popup-image__close-button');

const cardsTemplate = document.querySelector('.template').content;
const grid = document.querySelector('.elements__grid');


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const render = function () {
    initialCards.forEach((card) => {
        createCard(card.name, card.link);
    });
};

const openPopup = function(popup) {
    popup.classList.add('popup_active');
}

const closePopup = function(event) {
    event.target.closest('section').classList.remove('popup_active');
}

const handleImagePopup = function (event) {
    openPopup(popupImage);
    const card = event.target.parentNode;
    const link = card.querySelector('.element__image').getAttribute('src');
    const name = card.querySelector('.element__title').textContent;
    popupImage.querySelector('.popup-image__image').setAttribute('src', link);
    popupImage.querySelector('.popup-image__title').textContent = name;
}

const handleLike = function (event) {
    event.target.classList.toggle('element__button_active');
};

const handleDelete = function(event) {
    const card = event.target.parentNode;
    card.remove();
}

const handleEditInfo = function () {
    openPopup(popupEdit);
    if (popupEdit.classList.contains('popup_active')) {
        popupName.value = profileName.textContent
        popupDescription.value = profileDescription.textContent
    };
};

const handleAddPopup = function () {
    openPopup(popupAdd);
};

const createCard = function (name, link) {
    const newCard = cardsTemplate.cloneNode(true);
    const elementImage = newCard.querySelector('.element__image');
    elementImage.setAttribute('src', link);
    elementImage.setAttribute('alt', name);
    elementImage.addEventListener('click', handleImagePopup);
    newCard.querySelector('.element__title').textContent = name;
    newCard.querySelector('.element__button').addEventListener('click', handleLike);
    newCard.querySelector('.element__delete').addEventListener('click', handleDelete);
    addCard(newCard);
}

const addCard = function (newCard) {
    grid.prepend(newCard);
}

const handleEditSubmit = function (event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
    closePopup(event);
};

const handleAddSubmit = function (event) {
    event.preventDefault();
    const popupTitle = popupFirstLine.value;
    const popupLink = popupSecondLine.value;
    createCard(popupTitle, popupLink);
    closePopup(event);
    popupFirstLine.value = null;
    popupSecondLine.value = null;
}

editButton.addEventListener('click', handleEditInfo);
addButton.addEventListener('click', handleAddPopup);
closeButtons.forEach((btn) => {
    btn.addEventListener('click', closePopup);
});
formEdit.addEventListener('submit', handleEditSubmit);
formAdd.addEventListener('submit', handleAddSubmit);

render();