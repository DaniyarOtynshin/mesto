import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import { editButton, addButton, closeButtons, popupImage,
    popupEdit, popupName, profileName, popupDescription,
    profileDescription, popupAdd, initialCards, formAdd,
    formEdit, popupFirstLine, popupSecondLine } from "./constants.js";

const formParameters = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active'
  }

const cardList = new Section({
    items: initialCards,
    renderer: (card) => {
        const newCard = new Card({
            data: card,
            handleCardClick: () => {
                const popupImage = new PopupWithImage(popupImage);
                popupImage.open(card);
            }
        }, '.template');
        newCard.render();
    }
}, containerSelector);

cardList.renderItems()



const handleEditInfo = function() {
    openPopup(popupEdit);
    if (popupEdit.classList.contains('popup_active')) {
        popupName.value = profileName.textContent
        popupDescription.value = profileDescription.textContent
    };
}

const handleAddPopup = function() {
    openPopup(popupAdd);
    formAdd.reset();
    popupAdd.querySelector('.popup__submit-button').setAttribute('disabled', true);
    popupAdd.querySelector('.popup__submit-button').classList.add('popup__submit-button_disabled');
}

const handleEditSubmit = function(event) {
    event.preventDefault();
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
    closePopup();
}

const handleAddSubmit = function(event) {
    event.preventDefault();
    const popupTitle = popupFirstLine.value;
    const popupLink = popupSecondLine.value;
    addCard({name: popupTitle, link: popupLink});
    closePopup();
}

const formEditClass = new FormValidator(formParameters, formEdit);
const formAddClass = new FormValidator(formParameters, formAdd);

closeButtons.forEach((btn) => {
    btn.addEventListener('click', closePopup);
});

initialCards.forEach(addCard);

formEditClass.enableValidation();
formAddClass.enableValidation();
formEdit.addEventListener('submit', handleEditSubmit);
formAdd.addEventListener('submit', handleAddSubmit);
editButton.addEventListener('click', handleEditInfo);
addButton.addEventListener('click', handleAddPopup);