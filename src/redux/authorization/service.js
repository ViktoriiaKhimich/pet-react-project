import BaseHttpService from '../../shared/services/base-http-service'

class AuthHttpService extends BaseHttpService {

    async register(body) {
        const data = await this.post('auth/register', body)
        const { token, data: userData } = data;
        this.saveToken(token);
        return userData;
    }

    async login(body) {
        const data = await this.post('auth/login', body)
        const { token, data: userData } = data;
        this.saveToken(token);
        return userData;
    }
}

export default AuthHttpService;