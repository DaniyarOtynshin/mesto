const popupList = Array.from(document.querySelectorAll('.popup'));
const popupAdd = document.querySelector('.popup_add');
const popupEdit = document.querySelector('.popup_edit');
const popupImageSelector = '.popup-image';

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const popupName = popupEdit.querySelector('[name="name"]');
const popupDescription = popupEdit.querySelector('[name="description"]');

const popupFirstLine = popupAdd.querySelector('[name="title"]');
const popupSecondLine = popupAdd.querySelector('[name="link"]');

const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__button');
const addButton = document.querySelector('.profile__add-button');
const formEdit = '.popup__form_edit';
const formAdd = '.popup__form_add';
const imageCloseButton = document.querySelector('.popup-image__close-button');
const containerSelector = '.elements__grid';

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

export {editButton, addButton, formAdd, formEdit, closeButtons, popupImageSelector,
    popupEdit, popupName, profileName, popupDescription, profileDescription,
    popupAdd, popupList, popupFirstLine, popupSecondLine, imageCloseButton, initialCards, containerSelector };