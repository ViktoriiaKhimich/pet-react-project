import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import selectors from '../../redux/tasks/selectors'

import TasksList from '../../client/tasks/components/TasksList'
import { fetchTasks } from '../../redux/tasks/operations'

// const tasks = [
//     {
//         "_id": "60abb90f94ff3f6e84cb1936",
//         "date": "2021-05-28",
//         "isCompleted": true,
//         "title": "Застелить постель",
//         "reward": 3,
//         "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
//     },
//     {
//         "_id": "60abb90f94fff6e84cb1936",
//         "date": "2021-05-24",
//         "isCompleted": true,
//         "title": "Застелить постель",
//         "reward": 3,
//         "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
//     },
//     {
//         "_id": "60abb0f94ff3f6e84cb1936",
//         "title": "Застелить постель",
//         "date": "2021-05-27",
//         "isCompleted": true,
//         "reward": 3,
//         "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
//     },
//     {
//         "_id": "60abb90f94ff3f6e84cb136",
//         "date": "2021-05-24",
//         "title": "Застелить постель",
//         "isCompleted": false,
//         "reward": 3,
//         "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
//     },
//     {
//         "_id": "60abb9f94ff3f6e84cb1936",
//         "title": "Застелить постель",
//         "date": "2021-05-27",
//         "isCompleted": true,
//         "reward": 3,
//         "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
//     },
//     {
//         "_id": "6abb90f94ff3f6e84cb1936",
//         "title": "Застелить постель",
//         "date": "2021-05-24",
//         "isCompleted": false,
//         "reward": 3,
//         "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
//     },
// ]


const TasksPage = () => {

    const tasks = useSelector(state => state.tasks.allTasks, shallowEqual);
    const days = tasks.flatMap(item => item.days)
    const dates = days.map(item => item.date).splice(0, 7)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    return (
        <>
            <TasksList tasks={tasks} date={dates} />
        </>
    );
}




export default TasksPage;