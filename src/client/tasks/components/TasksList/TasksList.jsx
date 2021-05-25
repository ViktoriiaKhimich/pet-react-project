import React from 'react'
// import { connect } from 'react-redux'
// import selectors from '../../../../redux/tasks/selectors'
import TaskCard from '../TaskCard'
import styles from './TasksList.module.css'

const TasksList = ({ tasks, onClick }) => {
    const tasksElements = tasks.map(({ _id, ...props }) => <TaskCard key={_id} {...props} onClick={() => onClick(_id)}></TaskCard>)
    return (
        <ul className={styles.list}>{tasksElements}</ul>
    )
}

// const mapStateToProps = (state) => ({
//     tasks: selectors.getTasks(state)
// })


export default TasksList;