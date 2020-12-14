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
    formAdd,
    formEdit,
    formChangePhoto,
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
    popupSubmitButton,
    changeProfilePhotoButton
} from "../utils/constants.js";
import "./index.css";

const userInfo = new UserInfo({ profileName: profileNameSelector, profileDescription: profileDescriptionSelector });
const popupImage = new PopupWithImage(popupImageSelector);

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-18/', '992a3ad3-237d-4b2f-8424-0245e20d32b7');
const userData = api.getUserInfo();

function renderLoading(isLoading, popup, text) {
    const button = document.querySelector(popup).querySelector(formParameters.submitButtonSelector);
    if (isLoading) {
        button.textContent = 'Сохранение...';
    } else {
        button.textContent = text;
    }
}

function renderProfile() {
    const userInfo = api.getUserInfo();
    userInfo
        .then(res => {
            document.querySelector(profileNameSelector).textContent = res.name;
            document.querySelector(profileDescriptionSelector).textContent = res.about;
            document.querySelector(profileAvatarSelector).setAttribute('src', res.avatar);
        })
}

const popupSubmit = new PopupWithSubmit(
    popupSubmitSelector)

const renderCard = (card) => {
    const newCard = new Card({
        data: card,
        handleCardClick: () => popupImage.open(card),
        handleLikeClick: (id) => {
            const like = api.like(id);
            like.catch(err => console.error(err))
        },
        handleDislikeClick: (id) => {
            const dislike = api.dislike(id);
            dislike.catch(err => console.error(err))
        },
        handleDeleteClick: () => {
            popupSubmit.setSubmitAction(() => {
                api.deleteCard(newCard._id)
                    .then(res => newCard.handleDelete(newCard._id))
                    .catch(err => console.error(err))
            })
            popupSubmit.open()
        }
    }, cardTemplateSelector);
    userData
        .then(userData => {
            newCard._likes.forEach(author => {
                if (author._id === userData._id) {
                    newCard.handleToggleLike(newCard._likes.length)
                }
            })
            if (newCard.owner._id !== userData._id) {
                newCard.inactivateDelete();
            }
        })
    return newCard.render();
};

const cardList = new Section(renderCard, containerSelector);
const initialCards = api.getInitialCards();

initialCards
    .then(cards => {
        cardList.renderItems(cards);
    })

const setPopupForm = function (formType) {
    if (formType === formAdd) {
        popupSubmitButton.setAttribute('disabled', true);
        popupSubmitButton.classList.add('popup__submit-button_disabled'); 
    } else if (formType === formEdit) {
        const userData = api.getUserInfo();
        userData.then(userData => {
            popupName.value = userData.name;
            popupDescription.value = userData.about;
        })
    } else if (formType === formChangePhoto) {
        const button = formChangePhoto.querySelector(formParameters.submitButtonSelector);
        button.setAttribute('disabled', true);
        button.classList.add('popup__submit-button_disabled'); 
    }
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
            })
            .catch(err => console.log(err))
            .finally(() => {renderLoading(false, popupAddSelector, text)})
    },
    setPopupForm
);

const editUserProfileForm = new PopupWithForm(
    popupEditSelector,
    (formData) => {
        const text = document.querySelector(popupEditSelector).querySelector(formParameters.submitButtonSelector).textContent;
        renderLoading(true, popupEditSelector, text);
        api.changeUserInfo(formData)
            .then(res => {
                userInfo.setUserInfo(res)
            })
            .catch(err => console.log(err))
            .finally(() => {renderLoading(false, popupEditSelector, text)})
    },
    setPopupForm
);

const editUserProfilePhoto = new PopupWithForm(
    popupChangePhotoSelector,
    (formData) => {
        const text = document.querySelector(popupChangePhotoSelector).querySelector(formParameters.submitButtonSelector).textContent;
        renderLoading(true, popupChangePhotoSelector, text);
        const newAvatar = api.changeUserPhoto(formData);
        newAvatar
            .then(res => document.querySelector(profileAvatarSelector).setAttribute('src', res.avatar))
            .catch(err => console.log(err))
            .finally(() => {renderLoading(false, popupChangePhotoSelector, text)})
    },
    setPopupForm
);

const formEditValidator = new FormValidator(formParameters, formEditSelector);
const formAddCardValidator = new FormValidator(formParameters, formAddSelector);
const formChangePhotoValidator = new FormValidator(formParameters, formChangePhotoSelector);

renderProfile();
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