import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { ReactComponent as Giftbox } from './giftbox.svg'
import ProgressBar from '../../shared/components/ProgressBar'
import RewardsList from '../../client/rewards/components/RewardsList'
import operations from '../../redux/rewards/operations'
import Modal from '../../shared/components/Modal'
import RewardsModalContent from '../../client/rewards/components/RewardsModalContent/RewardsModalContent'

import styles from './RewardsPage.module.scss'

const RewardsPage = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

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
            <RewardsList gifts={gifts} toggleModal={toggleModal} />
            {showModal && <Modal onClose={toggleModal}><RewardsModalContent onClose={toggleModal} /></Modal>}
        </section>
    );
}

export default RewardsPage;