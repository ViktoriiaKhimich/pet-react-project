import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import actions from './actions';

const gifts = createReducer([], {
    [actions.fetchGiftsSuccess]: (_, { payload }) => payload.ruGifts,
})

const giftIds = createReducer([], {
    [actions.buyGiftsSuccess]: (_, { payload }) => payload.purchasedGiftIds,
})

const giftsReducer = combineReducers({
    gifts, giftIds,
})


export default giftsReducer;