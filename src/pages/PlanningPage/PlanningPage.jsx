import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import operations from '../../redux/planning/operations'

import PlansList from '../../client/planning/components/PlansList'
import CreateTaskForm from '../../client/planning/components/CreateTaskForm'
import CurrentWeek from '../../client/planning/components/CurrentWeek'
import WeekPoints from '../../client/planning/components/WeekPoints'
import Planning from '../../client/planning/components/Planning'
import Modal from '../../shared/components/Modal'

import styles from './PlanningPage.module.scss'
import { toggleCompleted } from '../../redux/tasks/operations'

const PlanningPage = () => {

    const tasks = useSelector(state => state.plans.plans);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    useEffect(() => {
        dispatch(operations.fetchPlans())
    }, [dispatch])

    return (
        <section className={styles.container}>
            <div className={styles.mainInfo}>
                <CurrentWeek>Plan for week</CurrentWeek>
                <WeekPoints />
                <Planning toggleModal={toggleModal} />
            </div>
            <PlansList tasks={tasks} />
            {showModal && <Modal onClose={toggleModal}><CreateTaskForm onClose={toggleModal} /></Modal>}
        </section>

    );
}

export default PlanningPage;