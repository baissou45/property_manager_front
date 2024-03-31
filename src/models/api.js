import axios from "axios";
import { Auth } from "./auth";

export class Api {
    static url = "http://localhost:8000/api/";

    static async get(url, auth = false) {

        let header = {
            'Content-Type': 'application/json',
        }

        if (auth) {
            if (!Auth.isAuthenticated()) {
                window.location.href = '/login';
            }

            const authData = Auth.authData();

            if (authData.user.hotel == null) {
                window.location.href = '/new-hotel';
            }

            console.log(authData);
            header['Authorization'] = "Bearer " + authData.token;
        }

        return await axios.get(this.url + url, { headers: header })
            .then(response => response)
            .catch(error => {
                switch (error.response.status) {
                    case 401:
                        Auth.logout();
                        window.location.href = '/login';
                        break;

                    default:
                        console.log(error.response.status);
                        break;
                }
            });
    }

    static async post(url, data, auth = false){
        let header = {
            'Content-Type': 'application/json',
        }

        if (auth) {

            if (!Auth.isAuthenticated()) {
                window.location.href = '/login';
            }

            const authData = Auth.authData();

            if (url != "hotels" && authData.user.hotel == null) {
                window.location.href = '/new-hotel';
            }

            header['Authorization'] = "Bearer " + authData.token;
        }

        return axios.post(this.url + url, data, {headers: header})
            .then(response => response)
            .catch(error => {
                switch (error.response.status) {
                    case 401:
                        Auth.logout();
                        window.location.href = '/login';
                        break;

                    default:
                        console.log(error.response.status);
                        break;
                }
            });
    }

}