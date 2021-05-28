import React from 'react'
import { days } from './days'

import styles from './DaysTabs.module.scss'

const DaysTabs = () => {
    const weekDays = days.map(day => <li className={styles.weekDays}>{day}</li>)
    return (

        <ul className={styles.daysList}>
            {weekDays}
        </ul>

    );
}

export default DaysTabs;