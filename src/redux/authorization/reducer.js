
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
    [actions.getCurrentUserSuccess]: (_, { payload }) => payload.user.email,
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
    [actions.getCurrentUserError]: (_, { payload }) => payload,
})

const isLogined = createReducer(false, {
    [actions.loginSuccess]: () => true,
    [actions.registerSuccess]: () => true,
    [actions.getCurrentUserSuccess]: () => true,
    [actions.loginError]: () => false,
    [actions.registerError]: () => false,
    [actions.getCurrentUserError]: () => false,
    [actions.logoutSuccess]: () => false,
})

const balance = createReducer(0, {
    [actions.loginSuccess]: (_, { payload }) => payload.user.balance,
    [actions.registerSuccess]: (_, { payload }) => payload.user.balance,
    [actions.logoutSuccess]: () => 0,
    [actions.getCurrentUserSuccess]: (_, { payload }) => payload.user.balance,
})

export default combineReducers({
    userEmail, token, error, isLogined, balance,
})