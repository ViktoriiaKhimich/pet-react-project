import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import styles from './ProgressBar.module.scss'

const ProgressBar = () => {

    const plannedPoints = useSelector(state => state.auth.rewardsPlanned, shallowEqual);
    let gainedPoints = useSelector(state => state.auth.rewardsGained, shallowEqual);
    const updatedWeekGainedRewards = useSelector(state => state.tasks.updatedWeekGainedRewards, shallowEqual);
    if (updatedWeekGainedRewards) {
        gainedPoints = updatedWeekGainedRewards
    }

    const countProgress = (plannedPoints, gainedPoints) => {
        const total = Math.round(100 * gainedPoints / plannedPoints);
        return total
    }

    const progress = countProgress(plannedPoints, gainedPoints)

    return (
        <>
            <div className={styles.progressInfo}>
                <p className={styles.text}>Gained points for this week: <span className={styles.points}>{gainedPoints}</span></p>
                <p className={styles.text}>Planned points for this week: <span className={styles.points}>{plannedPoints}</span> </p>
                <div className={styles.progress}>
                    <p className={styles.score}>{`${gainedPoints} / ${plannedPoints}`}</p>
                    <progress className={styles.progressBar} max='100' value={progress}></progress>
                </div>
            </div>
        </>
    );
}

export default ProgressBar;