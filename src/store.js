import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './redux/tasks/reducer'
import authReducer from './redux/authorization/reducer'
import plansReducer from './redux/planning/reducer'
import giftsReducer from './redux/rewards/reducer'

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        auth: authReducer,
        plans: plansReducer,
        gifts: giftsReducer,
    },
})

export default store;

