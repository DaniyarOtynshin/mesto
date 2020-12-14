const popupList = Array.from(document.querySelectorAll('.popup'));
const popupAddSelector = '.popup_add';
const popupEditSelector = '.popup_edit';
const popupSubmitSelector = '.popup_submit-form';
const popupChangePhotoSelector = '.popup_change-photo';

const popupName = document.querySelector(popupEditSelector).querySelector('[name="name"]'); 
const popupDescription = document.querySelector(popupEditSelector).querySelector('[name="about"]');

const popupImageSelector = '.popup-image';

const profileNameSelector = '.profile__name';
const profileDescriptionSelector = '.profile__description';
const profileAvatarSelector = '.profile__avatar';
const cardTemplateSelector = '.template';

const changeProfilePhotoButton = document.querySelector('.profile__photo-container');
const editButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__button');
const addButton = document.querySelector('.profile__add-button');
const formEditSelector = '.popup__form_edit';
const formAddSelector = '.popup__form_add';
const formChangePhotoSelector = '.popup__form_change-photo';
const formEdit = document.querySelector(formEditSelector);
const formAdd = document.querySelector(formAddSelector);
const formChangePhoto = document.querySelector(formChangePhotoSelector);
const imageCloseButton = document.querySelector('.popup-image__close-button');
const containerSelector = '.elements__grid';
const popupSubmitButton = document.querySelector(popupAddSelector).querySelector('.popup__submit-button');

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
    formChangePhotoSelector,
    formAdd,
    formEdit,
    formChangePhoto,
    closeButtons,
    cardTemplateSelector,
    popupImageSelector,
    popupAddSelector,
    popupEditSelector,
    popupSubmitSelector,
    popupChangePhotoSelector,
    popupName,
    popupDescription,
    profileNameSelector,
    profileDescriptionSelector,
    profileAvatarSelector,
    popupList,
    imageCloseButton,
    containerSelector,
    formParameters,
    popupSubmitButton,
    changeProfilePhotoButton
};