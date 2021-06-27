import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions'

const allTasks = createReducer([], {
    [actions.fetchTasksSuccess]: (_, { payload }) => payload.week.tasks,
    [actions.addTaskToDaysSuccess]: (state, { payload }) => [...state, payload.updatedTask],
    [actions.toggleCompletedSuccess]: (_, { payload }) => payload.updatedTask,
    [actions.createNewTaskSuccess]: (state, { payload: { id, title, days, imageUrl, reward } }) => [...state, { id, title, days, imageUrl, reward }],
})

const updatedBalance = createReducer(0, {
    [actions.toggleCompletedSuccess]: (_, { payload }) => payload.updatedBalance,
})

const updatedWeekGainedRewards = createReducer(0, {
    [actions.toggleCompletedSuccess]: (_, { payload }) => payload.updatedWeekGainedRewards,
})

const error = createReducer(null, {
    [actions.fetchTasksError]: (_, { payload }) => payload,
    [actions.addTaskToDaysError]: (_, { payload }) => payload,
    [actions.toggleCompletedError]: (_, { payload }) => payload,
})

const loading = createReducer(false, {
    [actions.fetchTasksRequest]: () => true,
    [actions.fetchTasksSuccess]: () => false,
    [actions.fetchTasksError]: () => false,
    [actions.addTaskToDaysRequest]: () => true,
    [actions.addTaskToDaysSuccess]: () => false,
    [actions.addTaskToDaysError]: () => false,
    [actions.toggleCompletedRequest]: () => true,
    [actions.toggleCompletedSuccess]: () => false,
    [actions.toggleCompletedError]: () => false,
})

export default combineReducers({
    allTasks,
    error,
    loading,
    updatedBalance,
    updatedWeekGainedRewards
})