import React from 'react'

import styles from './ProgressBar.module.scss'

const ProgressBar = () => {

    const plannedPoints = 16;
    const gainedPoints = 8;
    const progress = 50;

    return (
        <>
            <div className={styles.progressInfo}>
                <p className={styles.text}>Planned points for this week: <span className={styles.points}>{gainedPoints}</span> </p>
                <p className={styles.text}>Gained points for this week: <span className={styles.points}>{plannedPoints}</span></p>
                <div className={styles.progress}>
                    <p className={styles.score}>{`${gainedPoints} / ${plannedPoints}`}</p>
                    <progress className={styles.progressBar} max='100' value={progress}></progress>
                </div>
            </div>
        </>
    );
}

export default ProgressBar;