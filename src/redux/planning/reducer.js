import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import actions from './actions'

const plans = createReducer([], {
    [actions.fetchTasksToPlanSuccess]: (_, { payload }) => payload.week.tasks,
    [actions.createNewTaskSuccess]: (_, { payload }) => payload,
})

const error = createReducer(false, {
    [actions.fetchTasksToPlanError]: (_, { payload }) => payload,
    [actions.fetchTasksToPlanSuccess]: () => false,
    [actions.createNewTaskError]: (_, { payload }) => payload,
    [actions.createNewTaskSuccess]: () => false,
})

const plansReducer = combineReducers({
    plans, error
})
export default plansReducer;