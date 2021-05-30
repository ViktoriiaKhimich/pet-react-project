import React from 'react'
import PlansListItem from '../PlansListItem'
import styles from './PlansList.module.scss'

const PlansList = ({ tasks }) => {
    const tasksForPlanning = tasks.map(({ _id, ...props }) => <PlansListItem key={_id} {...props} taskId={_id} />)
    return (<ul className={styles.plansList}>
        {tasksForPlanning}
    </ul>);
}

export default PlansList;