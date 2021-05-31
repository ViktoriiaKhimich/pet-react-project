import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import selectors from '../../redux/tasks/selectors'

import TasksList from '../../client/tasks/components/TasksList'
import DaysTabs from '../../client/tasks/components/DaysTabs'
import { fetchTasks } from '../../redux/tasks/operations'


const TasksPage = () => {

    const tasks = useSelector(state => state.tasks.allTasks, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    return (
        <>
            <DaysTabs />
            {/* <TasksList tasks={tasks} /> */}
        </>
    );
}




export default TasksPage;