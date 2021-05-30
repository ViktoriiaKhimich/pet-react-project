import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import { ReactComponent as Plus } from './plus.svg'
import styles from './PlansListItem.module.scss'
import DaysSelect from '../DaysSelect'
import { addTaskToProvidedDays } from '../../../../redux/tasks/operations'

const dayStatus = Array(7).fill(false);

const PlansListItem = ({ title, reward, imageUrl, taskId }) => {

    const [showDays, setShowDays] = useState(false);
    const [weekDays, setWeekDays] = useState(dayStatus);

    const dispatch = useDispatch();

    const body = {
        days: weekDays
    }

    const handleCheck = (idx) => {
        const arr = [...weekDays];
        arr[idx] = !arr[idx];
        setWeekDays(arr)
    }

    const handleClick = () => {
        dispatch(addTaskToProvidedDays(body, taskId))
        chooseDay()
    }

    const chooseDay = () => {
        setShowDays(!showDays)
    }

    return (
        <li className={styles.item}>
            <img src={imageUrl} alt={title} />
            <div className={styles.description}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.score}>{reward} points</p>
                </div>
                <div>
                    <button className={styles.btn}>
                        {showDays ? <button type='submit' onClick={handleClick}>Ok</button> : <Plus onClick={chooseDay} />}
                        {showDays && <DaysSelect handleCheck={handleCheck} />}
                    </button>
                </div>
            </div>
        </li>);
}

export default PlansListItem;