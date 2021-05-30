import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions'

const allTasks = createReducer([], {
    [actions.fetchTasksSuccess]: (_, { payload }) => payload.week.tasks,
    [actions.addTaskToDaysSuccess]: (_, { payload }) => payload,
})

const error = createReducer(null, {
    [actions.fetchTasksError]: (_, { payload }) => payload,
    [actions.addTaskToDaysError]: (_, { payload }) => payload,
})

const loading = createReducer(false, {
    [actions.fetchTasksRequest]: () => true,
    [actions.fetchTasksSuccess]: () => false,
    [actions.fetchTasksError]: () => false,
    [actions.addTaskToDaysRequest]: () => true,
    [actions.addTaskToDaysSuccess]: () => false,
    [actions.addTaskToDaysError]: () => false,
})

export default combineReducers({
    allTasks,
    error,
    loading,
})