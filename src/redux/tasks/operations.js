import axios from 'axios';
import actions, { fetchTasksRequest, fetchTasksSuccess, fetchTasksError, addTaskToDaysRequest, addTaskToDaysSuccess, addTaskToDaysError, toggleCompletedRequest, toggleCompletedSuccess, toggleCompletedError, createNewTaskRequest, createNewTaskSuccess, createNewTaskError } from './actions';

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

export const toggleCompleted = (taskId, body) => async dispatch => {
    dispatch(toggleCompletedRequest())
    try {
        const { data } = await axios.patch(`/task/switch/${taskId}`, body)
        dispatch(toggleCompletedSuccess(data))
    } catch (error) {
        dispatch(toggleCompletedError(error))
    }
}

export const createNewTask = (body) => async dispatch => {

    dispatch(createNewTaskRequest())
    try {
        const { data } = await axios.post('/task', body)
        dispatch(createNewTaskSuccess(data))
    } catch (error) {
        dispatch(createNewTaskError(error))
    }
}

export default { fetchTasks, addTaskToProvidedDays, toggleCompleted, createNewTask };

