import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './redux/tasks/reducer'
import authReducer from './redux/authorization/reducer'

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        auth: authReducer,
    },
})

export default store;

