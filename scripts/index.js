import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import {
    editButton,
    addButton,
    initialCards,
    formAdd,
    formEdit,
    containerSelector,
    popupImageSelector
} from "./constants.js";

const formParameters = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__input-error_active'
}

const userInfo = new UserInfo( {profileName: '.profile__name', profileDescription: '.profile__description'} )

const cardList = new Section({
    items: initialCards,
    renderer: (card) => {
        const newCard = new Card({
            data: card,
            handleCardClick: () => {
                const popupImage = new PopupWithImage(popupImageSelector);
                popupImage.setEventListeners();
                popupImage.open(card);
            }
        }, '.template');
        return newCard.render();
    }
}, containerSelector);

const addForm = new PopupWithForm(
    '.popup_add',
    (formData) => {cardList.renderer(formData)}
)

const editForm = new PopupWithForm(
    '.popup_edit',
    (formData) => {userInfo.setUserInfo(formData)}
)

const formEditClass = new FormValidator(formParameters, formEdit);
const formAddClass = new FormValidator(formParameters, formAdd);

formEditClass.enableValidation();
formAddClass.enableValidation();
editForm.setEventListeners();
addForm.setEventListeners();
editButton.addEventListener('click', editForm.open.bind(editForm));
addButton.addEventListener('click', addForm.open.bind(addForm));
cardList.renderItems();