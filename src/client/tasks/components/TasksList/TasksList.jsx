import React from 'react'

import PropTypes from 'prop-types';
import TaskCard from '../TaskCard'

import styles from './TasksList.module.scss'

const TasksList = ({ tasks }) => {
    const tasksElements = tasks.map(({ _id, ...props }) => <TaskCard key={_id} {...props} ></TaskCard>)
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
