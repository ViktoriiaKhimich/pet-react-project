import React from 'react'
import moment from 'moment'
import styles from './CurrentWeek.module.scss'


const CurrentWeek = ({ children }) => {

    const startOfWeek = moment().startOf('isoweek').format('DD-MM-YYYY').slice(0, 2);
    const endOfWeek = moment().endOf('isoweek').format('DD-MM-YYYY');

    return (<p className={styles.week}>{children} <span className={styles.currentWeek}>{`${startOfWeek}  -  ${endOfWeek}`}</span></p>);
}

export default CurrentWeek;