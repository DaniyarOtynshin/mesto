export default class UserInfo {
    constructor({ profileName, profileDescription }) {
        this._profileName = document.querySelector(profileName);
        this._profileDescription = document.querySelector(profileDescription);
    };

    getUserInfo() {
        const name = this._profileName.textContent;
        const description = this._profileDescription.textContent;
        return {name, description}
    };

    setUserInfo( {name, description} ) {
        this._profileName.textContent = name;
        this._profileDescription.textContent = description;
    };
}