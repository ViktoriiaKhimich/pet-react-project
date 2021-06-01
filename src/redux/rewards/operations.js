import axios from 'axios'
import actions from './actions';

axios.defaults.baseURL = 'https://kidslike-v1-backend.goit.global';

export const fetchGifts = () => async dispatch => {
    dispatch(actions.fetchGiftsRequest())
    try {
        const { data } = await axios.get('/gift')
        dispatch(actions.fetchGiftsSuccess(data))
    } catch (error) {
        dispatch(actions.fetchGiftsError(error))
    }
}

export const buyGifts = (body) => async dispatch => {
    dispatch(actions.buyGiftsRequest())
    try {
        const { data } = await axios.patch('/gift', body)
        console.log(data);
        dispatch(actions.buyGiftsSuccess(data))
    } catch (error) {
        dispatch(actions.fetchGiftsError(error))
    }
}

export default {
    fetchGifts,
    buyGifts,
}
