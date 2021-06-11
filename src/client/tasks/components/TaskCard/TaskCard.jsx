import React, { useState } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'
import { ReactComponent as Completed } from '../../icons/completed.svg'
import { ReactComponent as Incompleted } from '../../icons/incompleted.svg'
import CheckboxToggle from '../../../../shared/components/CheckboxToggle'

import styles from './TaskCard.module.scss'

const TaskCard = ({ title, reward, days, imageUrl, toggleCompleted, active }) => {
    const today = moment().format('YYYY-MM-DD');

    const completedTask = days[active].isCompleted;
    const date = days[active].date;
    const exactDate = today === date;
    const expiredDate = date < today;

    const [completed, setCompleted] = useState(completedTask);

    return (
        <li className={styles.item}>
            <div>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={styles.description}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.score}>{reward} балла</p>
                </div>
                <div>
                    {exactDate &&
                        <CheckboxToggle checked={completed} onChange={(e) => setCompleted(e.target.checked)} onClick={toggleCompleted} />}
                    {expiredDate && completed && <Completed />}
                    {expiredDate && !completed && <Incompleted />}
                </div>
            </div>
        </li>
    );
}

TaskCard.defaultProps = {
    title: '',
    reward: '',
    imageUrl: '',
    isCompleted: false,
    toggleCompleted: () => { }
}

TaskCard.propTypes = {
    title: PropTypes.string,
    reward: PropTypes.number,
    imageUrl: PropTypes.string,
    isCompleted: PropTypes.bool,
    toggleCompleted: PropTypes.func,
}

export default TaskCard;