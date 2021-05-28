import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import actions from './actions'

const plans = createReducer([], {
    [actions.fetchTasksToPlanSuccess]: (_, { payload }) => payload.week.tasks,
})

const error = createReducer(null, {
    [actions.fetchTasksToPlanError]: (_, { payload }) => payload,
})

const plansReducer = combineReducers({
    plans, error
})
export default plansReducer;