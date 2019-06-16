import fetch from 'node-fetch';

let serverURI = 'https://marks-server.herokuapp.com';

export default {
    getAllThings(userId) {
        return fetch(`${serverURI}/api/things`, { method: 'GET', headers: { 'set-cookie': `userId=${userId}` } }).then(res => res.json());
    },

    deleteProduct(userId, itemId) {
        return fetch(`${serverURI}/api/things/${itemId}`, { method: 'DELETE', headers: { 'set-cookie': `userId=${userId}` } }).then(res => res.json());
    },

    getName(userId) {
        return fetch(`${serverURI}/api/users/${userId}`, { method: 'GET' }).then(res => res.json());
    },

    logIn(login, password) {
        let body = {
            login: login,
            password: password
        };
        return fetch(`${serverURI}/api/users/auth`, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(body)
        }).then(res => {
            if (res.ok) return res.json();
            throw Error(res.statusText);
        });
    },

    toRegister(login, password) {
        let body = {
            login: login,
            password: password
        };
        return fetch(`${serverURI}/api/users/reg`, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(body)
        }).then(res => {
            if (res.ok) return res.json();
            throw Error(res.statusText);
        });
    },
}

