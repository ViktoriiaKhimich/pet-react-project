import React, { useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { tabs } from './tabs'

import TasksList from '../TasksList'

import styles from './DaysTabs.module.scss'

const DaysTabs = () => {

    const [activeTab, setActiveTab] = useState(0)

    const tasks = useSelector(state => state.tasks.allTasks, shallowEqual);
    const updatedTask = useSelector(state => state.tasks.updateTasks, shallowEqual)


    const filterTask = (idx) => {
        const arr = tasks.map(task => { return task.days[idx].isActive ? task : null }).filter(item => item !== null)
        return arr;
    }
    const idsArr = filterTask(activeTab).map(item => item._id)
    const idx = idsArr.indexOf(updatedTask.id);
    filterTask(activeTab).splice(idx, 1, updatedTask)

    const weekDays = tabs.map(({ id, day, date }, idx) => {
        return <li key={id} onClick={() => setActiveTab(idx)} className={activeTab === idx ? `${styles.tabListItem} ${styles.tabListActive}` : `${styles.tabListItem}`}>{day}</li>
    })

    const dates = tabs.map(tab => tab.date);

    return (
        <div className={styles.asideBar}>
            <div className={styles.daysList}>
                {weekDays}
            </div>
            <div className={styles.tasks}>
                <TasksList tasks={filterTask(activeTab)} dates={dates} />
            </div>
        </div>
    );
}

export default DaysTabs;