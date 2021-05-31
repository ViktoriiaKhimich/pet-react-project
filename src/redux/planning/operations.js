// import PlansHttpService from './service';
import axios from 'axios'
import { fetchTasksToPlanRequest, fetchTasksToPlanSuccess, fetchTasksToPlanError, createNewTaskRequest, createNewTaskSuccess, createNewTaskError } from './actions'

// const service = new PlansHttpService();
axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';

export const fetchPlans = () => async dispatch => {
    dispatch(fetchTasksToPlanRequest())
    try {
        const { data } = await axios.get('/user/info');
        console.log(data);
        dispatch(fetchTasksToPlanSuccess(data))
    } catch (error) {
        dispatch(fetchTasksToPlanError(error.message))
    }
}

export const createNewTask = (body) => async dispatch => {

    dispatch(createNewTaskRequest())
    try {
        const { data } = await axios.post('/task', body)
        console.log(data);
        dispatch(createNewTaskSuccess(data))
    } catch (error) {
        dispatch(createNewTaskError(error))
    }
}

export default {
    fetchPlans, createNewTask,
}