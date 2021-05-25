import axios from 'axios';
import BaseHttpService from '../../shared/services/base-http-service'
import { loginRequest, loginSuccess, loginError, registerRequest, registerSuccess, registerError, logoutRequest, logoutSuccess, logoutError, currentUserRequest, currentUserSuccess, currentUserError } from './actions';

axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

const register = body => async dispatch => {
    dispatch(registerRequest())
    try {
        const { data } = await axios.post('/auth/register', body);
        token.set(data.token)
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerError(error))
    }
}

export default {
    register,
}