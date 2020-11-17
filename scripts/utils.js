import { formAdd, popupList, popupImage } from "./constants.js";

const openPopup = function(popup) {
    popup.classList.add('popup_active');
    popup.addEventListener('click', closePopup);
    addEscapeListener();
}

const addEscapeListener = function() {
    document.addEventListener('keyup', closeEscape);
};

const closePopup = function(event) {
    if (event.target == event.currentTarget) {
        event.target.closest('section').classList.remove('popup_active');
        document.removeEventListener('click', closePopup);
        document.removeEventListener('keyup', closeEscape);
        formAdd.reset()
    }
}

const isPopupActive = function(popup) {
    if (popup.classList.contains('popup_active')) {
        popup.classList.remove('popup_active');
    }
}

const closeEscape = function(event) {
    if (event.key === 'Escape') {
        popupList.forEach(isPopupActive);
        isPopupActive(popupImage);
    }
    document.removeEventListener('keyup', closeEscape)
}

export { openPopup, addEscapeListener, isPopupActive, closeEscape, closePopup };