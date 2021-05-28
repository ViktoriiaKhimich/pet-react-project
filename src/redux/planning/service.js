import BaseHttpService from '../../shared/services/base-http-service';

class PlansHttpService extends BaseHttpService {

    async getPlansList() {
        try {
            const data = await this.get('user/info')
            console.log(data);
            return data;
        } catch (error) {

        }
    }
}

export default PlansHttpService;