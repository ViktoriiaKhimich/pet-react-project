import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NoTasks.module.scss'

const NoTasks = () => {
    return (
        <>
            <p>No tasks planned for this day</p>
            <NavLink to='planning' exact className={styles.btn}>Plan Tasks</NavLink>

        </>
    );
}

export default NoTasks;