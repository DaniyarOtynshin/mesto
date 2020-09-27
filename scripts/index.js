const popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let popupName = popup.querySelector('[name="fname"]');
let popupDescription = popup.querySelector('[name="fdescription"]');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let form = document.querySelector('.popup__card');

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

const cardsTemplate = document.querySelector('.template').content;
const grid = document.querySelector('.elements__grid');

function render() {
    initialCards.forEach(renderItem);
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

let popupOpen = function () {
    popup.classList.toggle('popup_active')
    if (popup.classList.contains('popup_active')) {
        popupName.value = profileName.textContent
        popupDescription.value = profileDescription.textContent
    }
};

let editInfo = function (event) {
    event.preventDefault()
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
    popupOpen()
};

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupOpen);
form.addEventListener('submit', editInfo);

render();