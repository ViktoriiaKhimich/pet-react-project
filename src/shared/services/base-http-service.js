import axios from "axios";

class BaseHttpService {
    BASE_URL = 'https://kidslike-v1-backend.goit.global';

    accessToken = null;

    get(endpoint = '', options = {}) {
        Object.assign(options, this.getCommonOptions());
        return axios
            .get(`${this.BASE_URL}/${endpoint}`, options)
            .then(({ data }) => data)
            .catch((error) => this.handleError(error))
    }

    post(endpoint = '', options = {}, body) {
        Object.assign(options, this.getCommonOptions());
        return axios
            .post(`${this.BASE_URL}/${endpoint}`, body, options)
            .then(({ data }) => data)
            .catch((error) => this.handleError(error))
    }

    patch(endpoint = '', options = {}, body) {
        Object.assign(options, this.getCommonOptions());
        return axios
            .patch(`${this.BASE_URL}/${endpoint}`, body, options)
            .then(({ data }) => data)
            .catch((error) => this.handleError(error))
    }

    handleError(error) {
        const { statusCode } = error.response.data;
        if (statusCode !== 401) {
            throw error;
        } else {
            return this.handle401()
        }
    }

    handle401() {
        this.accessToken = null;
        this.removeToken();
    }

    getCommonOptions() {
        const { accessToken } = this.loadToken();
        return {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    }

    get accessToken() {
        return (this.accessToken || this.loadToken())
    }

    saveToken(data) {
        const { accessToken } = data;
        this.accessToken = accessToken;
        localStorage.setItem('accessToken', accessToken)
        return accessToken;
    }

    loadToken() {
        const accessToken = localStorage.getItem('accessToken');
        this.accessToken = accessToken;
        return accessToken;
    }

    removeToken() {
        localStorage.removeItem('accessToken')
    }
}

export default BaseHttpService;