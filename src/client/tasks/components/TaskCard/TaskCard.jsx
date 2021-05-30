import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'
import { ReactComponent as Completed } from '../../icons/completed.svg'
import { ReactComponent as Incompleted } from '../../icons/incompleted.svg'
import CheckboxToggle from '../../../../shared/components/CheckboxToggle'

import styles from './TaskCard.module.scss'

const TaskCard = ({ title, reward, imageUrl, date, isCompleted, toggleCompleted }) => {

    const today = moment().format('YYYY-MM-DD');
    const expiredDate = today > date;
    const exactDate = today === date;

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
                    {exactDate && <CheckboxToggle />}
                    {expiredDate && isCompleted && <Completed />}
                    {expiredDate && !isCompleted && <Incompleted />}
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
    reward: PropTypes.string,
    imageUrl: PropTypes.string,
    isCompleted: PropTypes.bool,
    toggleCompleted: PropTypes.func,
}

export default TaskCard;