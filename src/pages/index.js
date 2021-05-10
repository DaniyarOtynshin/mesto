import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import {
    editButton,
    addButton,
    formAddSelector,
    formEditSelector,
    popupAddSelector,
    popupEditSelector,
    popupSubmitSelector,
    popupChangePhotoSelector,
    containerSelector,
    popupImageSelector,
    formChangePhotoSelector,
    popupName,
    popupDescription,
    profileNameSelector,
    profileDescriptionSelector,
    profileAvatarSelector,
    formParameters,
    cardTemplateSelector,
    changeProfilePhotoButton
} from "../utils/constants.js";
import "./index.css";

const userInfo = new UserInfo({
    profileNameSelector: profileNameSelector,
    profileDescriptionSelector: profileDescriptionSelector,
    profileAvatarSelector: profileAvatarSelector
});
let userId;

const popupImage = new PopupWithImage(popupImageSelector);

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-18/', '992a3ad3-237d-4b2f-8424-0245e20d32b7');

function renderLoading(isLoading, popup, text) {
    const button = document.querySelector(popup).querySelector(formParameters.submitButtonSelector);
    if (isLoading) {
        button.textContent = 'Сохранение...';
    } else {
        button.textContent = text;
    }
}

const renderCard = (card) => {
    const newCard = new Card({
        data: card,
        handleCardClick: () => popupImage.open(card),
        handleLikeClick: (id) => {
            api.like(id)
                .then(data => newCard.handleToggleLike(data))
                .catch(err => console.error(err))
        },
        handleDislikeClick: (id) => {
            api.dislike(id)
                .then(data => newCard.handleToggleLike(data))
                .catch(err => console.error(err))
        },
        handleDeleteClick: () => {
            popupSubmit.setSubmitAction(() => {
                api.deleteCard(newCard._id)
                    .then(_ => newCard.handleDelete(newCard._id))
                    .catch(err => console.error(err))
            })
            popupSubmit.open()
        }
    },
    cardTemplateSelector,
    userId
    );

    return newCard.render();
};

const cardList = new Section(renderCard, containerSelector);

function renderPage() {
    api.renderPage()
        .then(data => {
            const [ cards, userData ] = data;
            userId = userData._id;
            cardList.renderItems(cards);
            userInfo.setUserInfo(userData);
        })
        .catch(err => console.error(err))
}

const popupSubmit = new PopupWithSubmit(
    popupSubmitSelector)

function setAddPopupForm() {
    formAddCardValidator.resetErrors()
    formAddCardValidator.disableSubmitButton();
}

function setEditPopupForm() {
    formEditValidator.resetErrors()
    const userData = userInfo.getUserInfo()
    popupName.value = userData.name;
    popupDescription.value = userData.about;
}

function setEditPhotoPopupForm() {
    formChangePhotoValidator.resetErrors()
    formChangePhotoValidator.disableSubmitButton(formParameters.submitButtonSelector);
}

const addCardForm = new PopupWithForm(
    popupAddSelector,
    (formData) => {
        const text = document.querySelector(popupAddSelector).querySelector(formParameters.submitButtonSelector).textContent;
        renderLoading(true, popupAddSelector, text);
        api.addNewCard(formData)
            .then(res => {
                const element = renderCard(res);
                cardList.addItem(element);
                addCardForm.close();
            })
            .catch(err => console.error(err))
            .finally(() => {renderLoading(false, popupAddSelector, text)})
    },
    setAddPopupForm
);

const editUserProfileForm = new PopupWithForm(
    popupEditSelector,
    (formData) => {
        const text = document.querySelector(popupEditSelector).querySelector(formParameters.submitButtonSelector).textContent;
        renderLoading(true, popupEditSelector, text);
        api.changeUserInfo(formData)
            .then(res => {
                userInfo.setUserInfo(res);
                editUserProfileForm.close();
            })
            .catch(err => console.error(err))
            .finally(() => {renderLoading(false, popupEditSelector, text)})
    },
    setEditPopupForm
);

const editUserProfilePhoto = new PopupWithForm(
    popupChangePhotoSelector,
    (formData) => {
        const text = document.querySelector(popupChangePhotoSelector).querySelector(formParameters.submitButtonSelector).textContent;
        renderLoading(true, popupChangePhotoSelector, text);
        const newAvatar = api.changeUserPhoto(formData);
        newAvatar
            .then(res => {
                userInfo.setUserAvatar(res);
                editUserProfilePhoto.close();
            })
            .catch(err => console.error(err))
            .finally(() => {renderLoading(false, popupChangePhotoSelector, text)})
    },
    setEditPhotoPopupForm
);

const formEditValidator = new FormValidator(formParameters, formEditSelector);
const formAddCardValidator = new FormValidator(formParameters, formAddSelector);
const formChangePhotoValidator = new FormValidator(formParameters, formChangePhotoSelector);

renderPage();
formChangePhotoValidator.enableValidation();
formEditValidator.enableValidation();
formAddCardValidator.enableValidation();
editUserProfileForm.setEventListeners();
editUserProfilePhoto.setEventListeners();
addCardForm.setEventListeners();
editButton.addEventListener('click', editUserProfileForm.open.bind(editUserProfileForm));
addButton.addEventListener('click', addCardForm.open.bind(addCardForm));
changeProfilePhotoButton.addEventListener('click', editUserProfilePhoto.open.bind(editUserProfilePhoto));
popupImage.setEventListeners();
popupSubmit.setEventListeners();