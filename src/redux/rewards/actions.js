import { createAction } from '@reduxjs/toolkit'

const fetchGiftsRequest = createAction('gifts/fetchGiftsRequest');
const fetchGiftsSuccess = createAction('gifts/fetchGiftsSuccess');
const fetchGiftsError = createAction('gifts/fetchGiftsError');

const buyGiftsRequest = createAction('gifts/buyGiftsRequest')
const buyGiftsSuccess = createAction('gifts/buyGiftsSuccess')
const buyGiftsError = createAction('gifts/buyGiftsError')

export default {
    fetchGiftsRequest,
    fetchGiftsSuccess,
    fetchGiftsError,
    buyGiftsRequest,
    buyGiftsSuccess,
    buyGiftsError,
}