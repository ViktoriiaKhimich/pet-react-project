import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import actions from './actions';

const gifts = createReducer([], {
    [actions.fetchGiftsSuccess]: (_, { payload }) => payload.ruGifts,
})

const giftsReducer = combineReducers({
    gifts
})

export default giftsReducer;