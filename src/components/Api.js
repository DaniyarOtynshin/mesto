export default class Api {
    constructor(url, authorization) {
        this._url = url;
        this._authorization = authorization;
    }

    getInitialCards() {
        return fetch(`${this._url}cards`, {
            headers: {
              authorization: this._authorization
            }
          })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .catch(err => console.log(err))
    }

    changeUserInfo({ name, about }) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              about: about
            })
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .catch(err => console.log(err))
    }

    addNewCard({ name, link }) {
        return fetch(`${this._url}cards`, {
            method: 'POST',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              link: link
            })
        })
        .then((res) => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .catch(err => console.log(err))
    }

    deleteCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .catch(err => console.log(err))
        }

    changeUserPhoto( {link} ) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._authorization,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            avatar: link
            })
        })
        .then((res) => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .catch(err => console.log(err))
        }

    getUserInfo() {
        return fetch(`${this._url}users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .catch(err => console.log(err))
  }

    like(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .catch(err => console.log(err))
        }

    dislike(id) {
        return fetch(`${this._url}cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization
            }
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .catch(err => console.log(err))
        }
}