import { combineReducers } from 'redux'
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions'

const allTasks = createReducer([], {
    // [actions.loginSuccess]: (_, { payload }) => payload.week.tasks,
    // [actions.registerSuccess]: (_, { payload }) => payload.week.tasks,
    [actions.fetchTasksSuccess]: (_, { payload }) => payload.week.tasks,
    [actions.addTaskToDaysSuccess]: (_, { payload }) => payload,
})

// const rewardsGainded = createReducer(0, {
//     [actions.buyGiftsSuccess]: (_, { payload }) => payload.week.rewardsGained,
// })

// const rewardsPlanned = createReducer(0, {
//     [actions.buyGiftsSuccess]: (_, { payload }) => payload.week.rewardsPlanned,
// })

const updateTasks = createReducer({}, {
    [actions.toggleCompletedSuccess]: (_, { payload }) => payload.updatedTask,
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
    updateTasks,
})