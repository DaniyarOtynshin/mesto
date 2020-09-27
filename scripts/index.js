const popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let popupFirstLine = popup.querySelector('[name="first-line"]');
let popupSecondLine = popup.querySelector('[name="second-line"]');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let addButton = document.querySelector('.profile__add-button');
let submitButton = document.querySelector('.popup__submit-button');
let form = document.querySelector('.popup__card');

const cardsTemplate = document.querySelector('.template').content;
const grid = document.querySelector('.elements__grid');

const state = { mode: 'edit' };


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

function render() {
    initialCards.forEach(renderItem);
    setListeners();
};

function renderItem(card, index) {
    const htmlElement = cardsTemplate.cloneNode(true);
    const link = card.link;
    const name = card.name;
    htmlElement.querySelector('.element__image').setAttribute('src', link);
    htmlElement.querySelector('.element__image').setAttribute('alt', name);
    htmlElement.querySelector('.element__title').textContent = name;
    htmlElement.querySelector('.element').setAttribute('id', index);
    grid.appendChild(htmlElement);
};

function setListeners() {
    editButton.addEventListener('click', handleEditInfo);
    closeButton.addEventListener('click', handlePopupToggle);
    addButton.addEventListener('click', handleAdd);
    form.addEventListener('submit', handleSubmit);
};

let handlePopupToggle = function () {
    popup.classList.toggle('popup_active');
    popupFirstLine.value = null;
    popupSecondLine.value = null;
};

let handleEditInfo = function () {
    handlePopupToggle();
    state.mode = 'edit';
    if (popup.classList.contains('popup_active')) {
        document.querySelector('.popup__title').textContent = 'Редактировать профиль';
        popupFirstLine.value = profileName.textContent
        popupSecondLine.value = profileDescription.textContent
        submitButton.textContent = 'Сохранить'
    };
};

let handleAdd = function () {
    handlePopupToggle();
    document.querySelector('.popup__title').textContent = 'Новое место';
    popupFirstLine.setAttribute('placeholder', 'Название');
    popupSecondLine.setAttribute('placeholder', 'Ссылка на картинку');
    submitButton.textContent = 'Создать';
    state.mode = 'add';
};

let addCard = function (name, link) {
    const htmlElement = cardsTemplate.cloneNode(true);
    htmlElement.querySelector('.element__image').setAttribute('src', link);
    htmlElement.querySelector('.element__image').setAttribute('alt', name);
    htmlElement.querySelector('.element__title').textContent = name;
    grid.prepend(htmlElement);
}

let handleSubmit = function (event) {
    if (state.mode === 'edit') {
        event.preventDefault();
        profileName.textContent = popupFirstLine.value;
        profileDescription.textContent = popupSecondLine.value;
        handlePopupToggle();
    }
    else if (state.mode === 'add') {
        event.preventDefault();
        let name = popupFirstLine.value;
        let link = popupSecondLine.value;
        addCard(name, link);
        handlePopupToggle();
    }
};

render();