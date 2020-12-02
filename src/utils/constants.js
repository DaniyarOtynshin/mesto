const popupList = Array.from(document.querySelectorAll('.popup'));
const popupAdd = '.popup_add';
const popupEdit = '.popup_edit';

const popupName = document.querySelector(popupEdit).querySelector('[name="name"]'); 
const popupDescription = document.querySelector(popupEdit).querySelector('[name="description"]');

const popupImageSelector = '.popup-image';

const profileName = '.profile__name';
const profileDescription = '.profile__description';

const cardTemplate = '.template';

const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__button');
const addButton = document.querySelector('.profile__add-button');
const formEditSelector = '.popup__form_edit';
const formAddSelector = '.popup__form_add';
const formEdit = document.querySelector(formEditSelector);
const formAdd = document.querySelector(formAddSelector);
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

const formParameters = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active'
};

export {
    editButton,
    addButton,
    formAddSelector,
    formEditSelector,
    formAdd,
    formEdit,
    closeButtons,
    cardTemplate,
    popupImageSelector,
    popupAdd,
    popupEdit,
    popupName,
    popupDescription,
    profileName,
    profileDescription,
    popupList,
    imageCloseButton,
    initialCards,
    containerSelector,
    formParameters
};