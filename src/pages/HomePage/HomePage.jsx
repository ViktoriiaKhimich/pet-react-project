import React from 'react'
import { connect } from 'react-redux'
import selectors from '../../redux/tasks/selectors'

// import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import TasksList from '../../client/tasks/components/TasksList'
// import operations from '../../redux/tasks/operations'

const tasks = [
    {
        "_id": "60abb90f94ff3f6e84cb1936",
        "date": "2021-05-24",
        "isCompleted": true,
        "title": "Застелить постель",
        "reward": 3,
        "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
    },
    {
        "_id": "60abb90f94fff6e84cb1936",
        "date": "2021-05-24",
        "isCompleted": false,
        "title": "Застелить постель",
        "reward": 3,
        "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
    },
    {
        "_id": "60abb0f94ff3f6e84cb1936",
        "title": "Застелить постель",
        "date": "2021-05-24",
        "isCompleted": true,
        "reward": 3,
        "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
    },
    {
        "_id": "60abb90f94ff3f6e84cb136",
        "date": "2021-05-24",
        "title": "Застелить постель",
        "isCompleted": false,
        "reward": 3,
        "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
    },
    {
        "_id": "60abb9f94ff3f6e84cb1936",
        "title": "Застелить постель",
        "date": "2021-05-24",
        "isCompleted": true,
        "reward": 3,
        "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
    },
    {
        "_id": "6abb90f94ff3f6e84cb1936",
        "title": "Застелить постель",
        "date": "2021-05-24",
        "isCompleted": false,
        "reward": 3,
        "imageUrl": "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025.png",
    },
]


const HomePage = () => {

    return (
        <>
            <TasksList tasks={tasks} />
        </>
    );
}

const mapStateToProps = (state) => ({
    tasks: selectors.getTasks(state)
})



export default connect(mapStateToProps)(HomePage);