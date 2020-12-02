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
    formAdd,
    formEdit,
    popupAdd,
    popupEdit,
    containerSelector,
    popupImageSelector,
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

const addCardForm = new PopupWithForm(
    popupAdd,
    (formData) => {
        const element = renderCard(formData);
        cardList.addItem(element);
    }
);

const editUserProfileForm = new PopupWithForm(
    popupEdit,
    (formData) => {userInfo.setUserInfo(formData)}
);

const formEditValidator = new FormValidator(formParameters, formEdit);
const formAddCardValidator = new FormValidator(formParameters, formAdd);

formEditValidator.enableValidation();
formAddCardValidator.enableValidation();
editUserProfileForm.setEventListeners();
addCardForm.setEventListeners();
editButton.addEventListener('click', editUserProfileForm.open.bind(editUserProfileForm));
addButton.addEventListener('click', addCardForm.open.bind(addCardForm));
popupImage.setEventListeners();
cardList.renderItems();