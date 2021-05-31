import { createAction } from '@reduxjs/toolkit'

const fetchGiftsRequest = createAction('gifts/fetchGiftsRequest');
const fetchGiftsSuccess = createAction('gifts/fetchGiftsSuccess');
const fetchGiftsError = createAction('gifts/fetchGiftsError');

export default {
    fetchGiftsRequest,
    fetchGiftsSuccess,
    fetchGiftsError
}