import React, { useEffect } from 'react'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import styles from './PlanningPage.module.scss'
import { ReactComponent as Plus } from './plus.svg'
import operations from '../../redux/planning/operations'

import PlansList from '../../client/planning/components/PlansList'

const PlanningPage = () => {

    const startOfWeek = moment().startOf('isoweek').format('DD-MM-YYYY').slice(0, 2);
    const endOfWeek = moment().endOf('isoweek').format('DD-MM-YYYY');

    const tasks = useSelector(state => state.plans.plans)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(operations.fetchPlans())
    }, [])

    return (
        <section className={styles.container}>
            <div className={styles.mainInfo}>
                <p className={styles.week}>Plan for week: <span className={styles.currentWeek}>{`${startOfWeek}  -  ${endOfWeek}`}</span></p>
                <p>Planned tasks for <span className={styles.score}>50</span> points</p>

                <div className={styles.newTask}>
                    <p>Want to gain more points - create new task</p>
                    <Plus className={styles.plus} />
                </div>
            </div>
            <PlansList tasks={tasks} />
        </section>
    );
}

export default PlanningPage;