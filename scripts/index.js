const popup = document.querySelector('.popup');

let profile__name = document.querySelector('.profile__name');
let profile__description = document.querySelector('.profile__description');

let popup__name = popup.querySelector('[name="fname"]');
let popup__description = popup.querySelector('[name="fdescription"]');

let edit_button = document.querySelector('.profile__edit-button');
let close_button = document.querySelector('.popup__close-button');
let save_button = document.querySelector('.popup__submit-button');

let popup_open = function () {
    popup.classList.toggle('popup_active')
}

let edit_info = function () {
    profile__name.textContent = popup__name.value;
    profile__description.textContent = popup__description.value;
    popup.classList.toggle('popup_active')
}

edit_button.addEventListener('click', popup_open)
close_button.addEventListener('click', popup_open)
save_button.addEventListener('click', edit_info)

