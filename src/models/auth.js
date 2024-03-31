import CryptoJS from 'crypto-js';

export class Auth {

    static encryptData = (data) => {
        return CryptoJS.AES.encrypt(JSON.stringify(data), "pm").toString();
    };

    static decryptData = (encryptedData) => {
        const bytes = CryptoJS.AES.decrypt(encryptedData, "pm");
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    };

    static authData = () => {
        return this.decryptData(localStorage.getItem('pm_auth'));
    }

    static login = (data) => {
        localStorage.setItem('pm_auth', this.encryptData(data));
    }

    static logout = () => {
        localStorage.removeItem('pm_auth');
    }

    static isAuthenticated = () => {
        return localStorage.getItem('pm_auth') ? true : false;
    }

}