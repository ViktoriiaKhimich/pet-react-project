import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { tabs } from './tabs'

import TasksList from '../TasksList'
import NoTasks from '../NoTasks'
import CurrentWeek from '../../../planning/components/CurrentWeek'
import ProgressBar from '../../../../shared/components/ProgressBar'

import styles from './DaysTabs.module.scss'

const DaysTabs = () => {

    const [activeTab, setActiveTab] = useState(0)

    const tasks = useSelector(state => state.tasks.allTasks, shallowEqual);

    const filterTask = (idx) => {
        const arr = tasks.map(task => { return task.days[idx].isActive ? task : null }).filter(item => item !== null)
        return arr;
    }

    const weekDays = tabs.map(({ id, day, date }, idx) => {
        return <li key={id} onClick={() => setActiveTab(idx)} className={activeTab === idx ? `${styles.tabListItem} ${styles.tabListActive}` : `${styles.tabListItem}`}>{day}</li>
    })

    const dates = tabs.map(tab => tab.date);

    const currentDay = (array, idx) => {
        const day = array[idx].day
        const date = array[idx].date
        return { day, date };
    }

    return (
        <section className={styles.section}>
            <div className={styles.asideBar}>
                <div className={styles.daysList}>
                    {weekDays}
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.weekInfo}>
                    <div className={styles.curWeek}>
                        <CurrentWeek>Week:</CurrentWeek>
                        <p>Tasks: {`${currentDay(tabs, activeTab).day}, ${currentDay(tabs, activeTab).date}`} </p>
                    </div>
                    <ProgressBar />
                </div>
                <div className={styles.tasks}>
                    {filterTask(activeTab).length ? < TasksList tasks={filterTask(activeTab)} dates={dates} active={activeTab} /> : <NoTasks />}
                </div>
            </div>
        </section>
    );
}

export default DaysTabs;