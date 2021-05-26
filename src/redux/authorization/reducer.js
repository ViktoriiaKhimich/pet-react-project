
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './actions';

const initialState = [{
    email: null,
}]

const userEmail = createReducer(initialState, {
    [actions.loginSuccess]: (_, { payload }) => payload.user.email,
    [actions.registerSuccess]: (_, { payload }) => payload.user.email,
    [actions.logoutSuccess]: () => initialState,
    [actions.currentUserSuccess]: (_, { payload }) => payload,
})

const token = createReducer(null, {
    [actions.registerSuccess]: (_, { payload }) => payload.token,
    [actions.loginSuccess]: (_, { payload }) => payload.token,
    [actions.logoutSuccess]: () => null,
})

const error = createReducer(null, {
    [actions.loginError]: (_, { payload }) => payload,
    [actions.logoutError]: (_, { payload }) => payload,
    [actions.registerError]: (_, { payload }) => payload,
    [actions.currentUserError]: (_, { payload }) => payload,
})

const isLogined = createReducer(false, {
    [actions.loginSuccess]: () => true,
    [actions.registerSuccess]: () => true,
    [actions.currentUserSuccess]: () => true,
    [actions.loginError]: () => false,
    [actions.registerError]: () => false,
    [actions.currentUserError]: () => false,
    [actions.logoutSuccess]: () => false,
})

export default combineReducers({
    userEmail, token, error, isLogined,
})