import React, { useState } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'
import { ReactComponent as Completed } from '../../icons/completed.svg'
import { ReactComponent as Incompleted } from '../../icons/incompleted.svg'
import CheckboxToggle from '../../../../shared/components/CheckboxToggle'

import styles from './TaskCard.module.scss'

const TaskCard = ({ title, reward, days, imageUrl, isCompleted, toggleCompleted }) => {

    const [completed, setCompleted] = useState(false);

    const today = moment().format('YYYY-MM-DD');

    const exactDate = days.map(day => day.date === today && day.isActive ? <CheckboxToggle checked={completed} onChange={(e) => setCompleted(e.target.checked)} onClick={toggleCompleted} /> : false);


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
                    {exactDate}
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