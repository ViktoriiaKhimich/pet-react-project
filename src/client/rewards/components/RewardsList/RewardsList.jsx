import React, { useState } from 'react'
import RewardsCard from '../RewardCard'
import styles from './RewardsList.module.scss'

const RewardsList = ({ gifts }) => {

    const giftsElements = gifts.map(({ id, ...props }) => <RewardsCard key={id} {...props} />)
    return (
        <ul className={styles.giftsList}>
            {giftsElements}
        </ul>
    );
}

export default RewardsList;