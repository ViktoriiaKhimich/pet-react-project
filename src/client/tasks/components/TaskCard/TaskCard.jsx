import React from 'react'
import moment from 'moment'
import { ReactComponent as Completed } from '../../icons/completed.svg'
import { ReactComponent as Incompleted } from '../../icons/incompleted.svg'

import styles from './TaskCard.module.css'

const TaskCard = ({ title, reward, imageUrl, date, isCompleted, toggleCompleted }) => {

    const today = moment().format('YYYY-MM-DD');
    const expiredDate = today > date;
    const exactDate = today === date;

    return (
        <li className={styles.taskItem}>
            <div>
                <img src={imageUrl} alt={title} className={styles.taskImage} />
            </div>
            <div className={styles.taskDescription}>
                <div>
                    <h3 className={styles.taskTitle}>{title}</h3>
                    <p className={styles.taskScore}>{reward} балла</p>
                </div>
                {exactDate && <input onChange={toggleCompleted}></input>}
                <div>
                    {expiredDate && isCompleted && <Completed />}
                    {expiredDate && !isCompleted && <Incompleted />}
                </div>
            </div>
        </li>
    );
}

export default TaskCard;