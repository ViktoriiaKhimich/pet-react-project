import React from 'react'
import PlansListItem from '../PlansListItem'


const PlansList = ({ tasks }) => {
    const tasksForPlanning = tasks.map(({ _id, ...props }) => <PlansListItem key={_id} {...props} />)
    return (<ul>
        {tasksForPlanning}
    </ul>);
}

export default PlansList;