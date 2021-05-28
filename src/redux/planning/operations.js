// import PlansHttpService from './service';
import axios from 'axios'
import { fetchTasksToPlanRequest, fetchTasksToPlanSuccess, fetchTasksToPlanError } from './actions'

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

export default {
    fetchPlans
}