import { v4 } from 'uuid';
import { dates } from './days'

export const tabs = [
    {
        id: v4(),
        day: 'Monday',
        date: dates[0],
    },
    {
        id: v4(),
        day: 'Tuesday',
        date: dates[1],
    },
    {
        id: v4(),
        day: 'Wednesday',
        date: dates[2],
    },
    {
        id: v4(),
        day: 'Thursday',
        date: dates[3],
    },
    {
        id: v4(),
        day: 'Friday',
        date: dates[4],
    },
    {
        id: v4(),
        day: 'Saturday',
        date: dates[5],
    },
    {
        id: v4(),
        day: 'Sunday',
        date: dates[6],
    }

]