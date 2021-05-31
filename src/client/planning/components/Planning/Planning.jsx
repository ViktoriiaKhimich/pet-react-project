import React, { useState } from 'react'
import { ReactComponent as Plus } from './plus.svg'
import CreateTaskForm from '../CreateTaskForm'
import Modal from '../../../../shared/components/Modal'
import styles from './Planning.module.scss'

const Planning = ({ toggleModal, showModal }) => {

    return (
        <>
            <div className={styles.newTask}>
                <p>Want to gain more points - create new task</p>
                <button className={styles.btn} onClick={toggleModal}>
                    <Plus className={styles.plus} />
                </button>
            </div>

            <CreateTaskForm onClose={toggleModal} />

        </>
    );
}

export default Planning;