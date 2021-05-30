import React from 'react'
import { useSelector } from 'react-redux'
import styles from './WeekPoints.module.scss'

const WeekPoints = () => {
    const score = useSelector(state => state.tasks.allTasks.updatedWeekPlannedRewards);

    return (
        <p>Planned tasks for <span className={styles.score}>{score ? score : 0}</span> points</p>
    );
}

export default WeekPoints;