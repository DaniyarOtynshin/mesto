import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";
import {editButton, addButton, closeButtons,
    popupEdit, popupName, profileName, popupDescription,
    profileDescription, popupAdd} from "./constants.js";

const container = document.querySelector('.elements__grid');

const formParameters = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active'
  }

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

export const addCard = (card) => {
    const newCard = new Card(card);
    newCard.render(container);
}

const enableValidation = (form) => {
    const formToValidate = new FormValidator(formParameters, form);
    formToValidate.enableValidation();
}

const formList = Array.from(document.querySelectorAll('.popup__form'));

const handleEditInfo = function() {
    openPopup(popupEdit);
    if (popupEdit.classList.contains('popup_active')) {
        popupName.value = profileName.textContent
        popupDescription.value = profileDescription.textContent
    };
}

const handleAddPopup = function() {
    openPopup(popupAdd);
}

closeButtons.forEach((btn) => {
    btn.addEventListener('click', closePopup);
});

initialCards.forEach(addCard);
formList.forEach(enableValidation);

editButton.addEventListener('click', handleEditInfo);
addButton.addEventListener('click', handleAddPopup);