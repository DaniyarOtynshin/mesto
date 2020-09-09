const popup = document.querySelector('.popup');

let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let popupName = popup.querySelector('[name="fname"]');
let popupDescription = popup.querySelector('[name="fdescription"]');

let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let form = document.querySelector('.popup__card');

let popupOpen = function () {
    popup.classList.toggle('popup_active')
    popupName.value = profileName.textContent
    popupDescription.value = profileDescription.textContent
}

let editInfo = function (event) {
    event.preventDefault()
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;
    popupOpen()
}

editButton.addEventListener('click', popupOpen)
closeButton.addEventListener('click', popupOpen)
form.addEventListener('submit', editInfo)