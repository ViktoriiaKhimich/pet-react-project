import React from 'react'
import { ReactComponent as Plus } from './plus.svg'
import styles from './Planning.module.scss'

const Planning = ({ toggleModal }) => {

    return (
        <>
            <div className={styles.newTask}>
                <p>Want to gain more points - create new task</p>
                <button className={styles.btn} onClick={toggleModal}>
                    <Plus className={styles.plus} />
                </button>
            </div>
        </>
    );
}

export default Planning;