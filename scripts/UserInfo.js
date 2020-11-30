export default class UserInfo {
    constructor({ profileName, profileDescription }) {
        this._profileName = document.querySelector(profileName);
        this._profileDescription = document.querySelector(profileDescription);
    }

    getUserInfo() {
        {this._profileName.textContent, this._profileDescription.textContent}
    }

    setUserInfo( {name, description} ) {
        this._profileName.textContent = name;
        this._profileDescription.textContent = description;
    }
}