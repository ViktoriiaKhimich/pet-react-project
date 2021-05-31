import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { tabs } from './tabs'
import { dates } from './days'

import TaskList from '../TasksList'

import styles from './DaysTabs.module.scss'

const DaysTabs = () => {

    // const tasks = useSelector(state => state.tasks.allTasks, shallowEqual);

    const [activeTab, setActiveTab] = useState(0)

    const weekDays = tabs.map(({ id, day }, idx) => {
        return <li key={id} onClick={() => setActiveTab(idx)} className={activeTab === idx ? `${styles.tabListItem} ${styles.tabListActive}` : `${styles.tabListItem}`}>{day}</li>
    })

    return (
        <div className={styles.asideBar}>
            <div className={styles.daysList}>
                {weekDays}
            </div>
            <div>
                <TaskList />
            </div>
        </div>
    );
}

export default DaysTabs;