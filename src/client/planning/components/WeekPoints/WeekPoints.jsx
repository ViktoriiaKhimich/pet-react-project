import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import styles from './WeekPoints.module.scss'

const WeekPoints = () => {
    const plannedPoints = useSelector(state => state.auth.rewardsPlanned, shallowEqual);

    return (
        <p>Planned tasks for <span className={styles.score}>{plannedPoints ? plannedPoints : 0}</span> points</p>
    );
}

export default WeekPoints;