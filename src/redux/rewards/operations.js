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

export default {
    fetchGifts
}
