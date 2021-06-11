import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import DaysTabs from '../../client/tasks/components/DaysTabs'
import { fetchTasks } from '../../redux/tasks/operations'

import styles from './TasksPage.module.scss'


const TasksPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    return (

        <DaysTabs />

    );
}




export default TasksPage;