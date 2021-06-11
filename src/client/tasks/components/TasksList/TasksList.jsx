import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { toggleCompleted } from '../../../../redux/tasks/operations'
import PropTypes from 'prop-types';
import TaskCard from '../TaskCard'

import styles from './TasksList.module.scss'

const TasksList = ({ tasks, active }) => {

    const dispatch = useDispatch()

    const toggleCheckbox = (id) => {
        dispatch(toggleCompleted(id, { date: moment().format('YYYY-MM-DD') }))
    }

    const tasksElements = tasks.map(({ id, _id, ...props }) => <TaskCard key={id ? id : _id} {...props} active={active} toggleCompleted={() => toggleCheckbox(_id)}></TaskCard>)

    return (
        <ul className={styles.list}>{tasksElements}</ul>
    )
}

TasksList.defaultProps = {
    tasks: [],
    onClick: () => { }
}

TasksList.propTypes = {
    tasks: PropTypes.array,
    onClick: PropTypes.func,
}


export default TasksList;
