const popupList = Array.from(document.querySelectorAll('.popup'));
const popupAdd = document.querySelector('.popup_add');
const popupEdit = document.querySelector('.popup_edit');
const popupImage = document.querySelector('.popup-image');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const popupName = popupEdit.querySelector('[name="name"]');
const popupDescription = popupEdit.querySelector('[name="description"]');

const popupFirstLine = popupAdd.querySelector('[name="title"]');
const popupSecondLine = popupAdd.querySelector('[name="link"]');

const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__button');
const addButton = document.querySelector('.profile__add-button');
const formEdit = document.querySelector('.popup__form_edit');
const formAdd = document.querySelector('.popup__form_add');
const imageCloseButton = document.querySelector('.popup-image__close-button');

export {editButton, addButton, formAdd, formEdit, closeButtons, popupImage,
    popupEdit, popupName, profileName, popupDescription, profileDescription,
    popupAdd, popupList, popupFirstLine, popupSecondLine, imageCloseButton };