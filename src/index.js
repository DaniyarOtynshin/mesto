import Card from "./pages/Card.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import {
    editButton,
    addButton,
    initialCards,
    formAddSelector,
    formEditSelector,
    formAdd,
    formEdit,
    popupAdd,
    popupEdit,
    containerSelector,
    popupImageSelector,
    popupName,
    popupDescription,
    profileName,
    profileDescription,
    formParameters,
    cardTemplate
} from "./utils/constants.js";
import "./pages/index.css";

const userInfo = new UserInfo({ profileName: profileName, profileDescription: profileDescription });
const popupImage = new PopupWithImage(popupImageSelector);


const renderCard = (card) => {
    const newCard = new Card({
        data: card,
        handleCardClick: () => popupImage.open(card)
    }, cardTemplate);
    return newCard.render();
};

const cardList = new Section({
    items: initialCards,
    renderer: renderCard
    },
    containerSelector
);

const renderForm = function (formType) {
    if (formType == formAdd) {
        document.querySelector(popupAdd).querySelector('.popup__submit-button').setAttribute('disabled', true);
        document.querySelector(popupAdd).querySelector('.popup__submit-button').classList.add('popup__submit-button_disabled'); 
    } else if (formType == formEdit) {
        const userData = userInfo.getUserInfo();
        popupName.value = userData.name;
        popupDescription.value = userData.description;
    }
}

const addCardForm = new PopupWithForm(
    popupAdd,
    (formData) => {
        const element = renderCard(formData);
        cardList.addItem(element);
    },
    renderForm
);

const editUserProfileForm = new PopupWithForm(
    popupEdit,
    (formData) => {userInfo.setUserInfo(formData)},
    renderForm
);

const formEditValidator = new FormValidator(formParameters, formEditSelector);
const formAddCardValidator = new FormValidator(formParameters, formAddSelector);

formEditValidator.enableValidation();
formAddCardValidator.enableValidation();
editUserProfileForm.setEventListeners();
addCardForm.setEventListeners();
editButton.addEventListener('click', editUserProfileForm.open.bind(editUserProfileForm));
addButton.addEventListener('click', addCardForm.open.bind(addCardForm));
popupImage.setEventListeners();
cardList.renderItems();