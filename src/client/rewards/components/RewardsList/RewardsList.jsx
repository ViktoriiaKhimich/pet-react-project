import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import RewardsCard from '../RewardCard'
import Button from '../../../../shared/components/Button'
import { buyGifts } from '../../../../redux/rewards/operations'

import styles from './RewardsList.module.scss'

const RewardsList = ({ gifts }) => {

    const [idsArr, setIdsArr] = useState([]);
    const dispatch = useDispatch()

    const handleChange = (id, checked) => {
        let qwe = [...idsArr]
        if (checked) {
            qwe.push(id);
            setIdsArr(qwe)
        } else {
            const idx = qwe.indexOf(id)
            qwe.splice(idx, 1)
            setIdsArr(qwe)
        }
    }

    const body = { giftIds: idsArr };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(buyGifts(body))
    }

    const giftsElements = gifts.map(({ id, ...props }) => <RewardsCard key={id} {...props} id={id} onClick={handleChange} />)
    return (
        <div>
            <ul className={styles.giftsList}>
                {giftsElements}
            </ul>
            <Button onClick={handleSubmit} type='submit' className={styles.btn}>Confirm</Button>
        </div>
    );
}

export default RewardsList;