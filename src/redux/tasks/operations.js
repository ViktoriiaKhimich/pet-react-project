import axios from 'axios';
import { fetchTasksRequest, fetchTasksSuccess, fetchTasksError, addTaskToDaysRequest, addTaskToDaysSuccess, addTaskToDaysError } from './actions';

axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';

export const fetchTasks = () => async dispatch => {

    dispatch(fetchTasksRequest())
    try {
        const { data } = await axios.get('/user/info')
        dispatch(fetchTasksSuccess(data))
    } catch (error) {
        dispatch(fetchTasksError(error))
    }
}

export const addTaskToProvidedDays = (body, taskId) => async dispatch => {
    dispatch(addTaskToDaysRequest());
    try {
        const { data } = await axios.patch(`/task/single-active/${taskId}`, body);
        dispatch(addTaskToDaysSuccess(data))
    } catch (error) {
        dispatch(addTaskToDaysError(error))
    }
}

export default { fetchTasks, addTaskToProvidedDays };

