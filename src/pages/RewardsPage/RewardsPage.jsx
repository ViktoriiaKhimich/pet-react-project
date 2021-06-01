import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { ReactComponent as Giftbox } from './giftbox.svg'
import ProgressBar from '../../shared/components/ProgressBar'
import RewardsList from '../../client/rewards/components/RewardsList'
import Button from '../../shared/components/Button'
import operations from '../../redux/rewards/operations'

import styles from './RewardsPage.module.scss'

const RewardsPage = () => {

    const gifts = useSelector(state => state.gifts.gifts, shallowEqual);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(operations.fetchGifts())
    }, [dispatch])



    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <div className={styles.rewards}>
                    <Giftbox />
                    <h2 className={styles.title}>Rewards</h2>
                </div>
                <div>
                    <ProgressBar />
                </div>
            </div>
            <RewardsList gifts={gifts} />
        </section>
    );
}

export default RewardsPage;