import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions'

const tasks = createReducer([], {
    [actions.fetchTasksSuccess]: ((_, { payload }) => payload)
})

const error = createReducer(null, {
    [actions.fetchTasksError]: ((_, { payload }) => payload)
})

const loading = createReducer(false, {
    [actions.fetchTasksRequest]: () => true,
})

export default combineReducers({
    tasks,
    error,
    loading,
})