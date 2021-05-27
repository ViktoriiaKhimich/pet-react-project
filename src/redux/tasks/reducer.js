import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions'

const allTasks = createReducer([], {
    [actions.fetchTasksSuccess]: (_, { payload }) => payload.week.tasks
})

const error = createReducer(null, {
    [actions.fetchTasksError]: (_, { payload }) => payload,
})

const loading = createReducer(false, {
    [actions.fetchTasksRequest]: () => true,
})

export default combineReducers({
    allTasks,
    error,
    loading,
})