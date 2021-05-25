import axios from 'axios';
import { fetchTasksRequest, fetchTasksSuccess, fetchTasksError } from './actions';

axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';

export const fetchTasks = () => async dispatch => {
    dispatch(fetchTasksRequest())

    try {
        await axios.get('/user/info')
        const { data } = await axios.get('/user/info')
        dispatch(fetchTasksSuccess(data.tasks))
    } catch (error) {
        dispatch(fetchTasksError(error))
    }
}

export default fetchTasks;

