import axios from 'axios';
// import AuthHttpService from './service'
// import BaseHttpService from '../../shared/services/base-http-service'
import { loginRequest, loginSuccess, loginError, registerRequest, registerSuccess, registerError, logoutRequest, logoutSuccess, logoutError, getCurrentUserRequest, getCurrentUserSuccess, getCurrentUserError } from './actions';

axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }
}

const tokenStorage = {
    add(token) {
        localStorage.setItem('token', token)
    },
    remove() {
        localStorage.removeItem('token')
    },
    get() {
        const token = localStorage.getItem('token')
        return token
    }
}

const register = body => async dispatch => {
    dispatch(registerRequest())
    try {
        const { data } = await axios.post('/auth/register', body);
        token.set(data.token)
        tokenStorage.add(data.token)
        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerError(error))
    }
}

const login = body => async dispatch => {
    dispatch(loginRequest())
    try {
        const { data } = await axios.post('/auth/login', body)
        token.set(data.token)
        tokenStorage.add(data.token)
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginError(error))
    }
}

export const logout = () => async dispatch => {
    dispatch(logoutRequest())
    try {
        await axios.post('/auth/logout')
        token.unset()
        tokenStorage.remove()
        dispatch(logoutSuccess())
    }
    catch (error) {
        dispatch(logoutError(error))
    }
}

export const getCurrentUser = () => async dispatch => {
    const storedToken = tokenStorage.get()

    if (!storedToken) {
        return;
    }

    token.set(storedToken)
    dispatch(getCurrentUserRequest())
    try {
        const { data } = await axios.get('/user/info')
        dispatch(getCurrentUserSuccess(data))
    }
    catch (error) {
        dispatch(getCurrentUserError(error))
    }
}

export const getProgress = () => async dispatch => {

}

export default { register, login, logout, getCurrentUser }
