import BaseHttpService from './base-http-service';

class TasksHttpService extends BaseHttpService {

    async getTasks() {
        return await this.get('/user/info')
    }
}

export default TasksHttpService;