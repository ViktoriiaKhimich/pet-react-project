import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './redux/tasks/reducer'
import authReducer from './redux/authorization/reducer'
import plansReducer from './redux/planning/reducer'

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        auth: authReducer,
        plans: plansReducer,
    },
})

export default store;

