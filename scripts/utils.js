const openPopup = function(popup) {
    popup.classList.add('popup_active');
    popup.addEventListener('mousedown', closeByOverlay);
    addEscapeListener();
};

const addEscapeListener = function() {
    document.addEventListener('keyup', closeEscape);
};

const closePopup = function() {
    const openedPopup = document.querySelector('.popup_active')
    openedPopup.classList.remove('popup_active');
    openedPopup.removeEventListener('click', closeByOverlay);
    document.removeEventListener('keyup', closeEscape);
};

const closeByOverlay = function(event) {
    if (event.target == event.currentTarget) { 
        closePopup();
    }
}

const closeEscape = function(event) {
    if (event.key === 'Escape') {
        closePopup();
    }
};

export { openPopup, addEscapeListener, closePopup, closeByOverlay, closeEscape } 