export default class UserInfo {
    constructor({ profileNameSelector, profileDescriptionSelector, profileAvatarSelector }) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileDescription = document.querySelector(profileDescriptionSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector);

    };

    getUserInfo() {
        const name = this._profileName.textContent;
        const about = this._profileDescription.textContent;
        return {name, about}
    };

    setUserInfo( {name, about, avatar} ) {
        this._profileName.textContent = name;
        this._profileDescription.textContent = about;
        this._profileAvatar.setAttribute('src', avatar);
    };

    setUserAvatar( {avatar} ) {
        this._profileAvatar.setAttribute('src', avatar);
    };
};
