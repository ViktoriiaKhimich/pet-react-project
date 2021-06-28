import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import Button from '../../../../shared/components/Button'
import { ReactComponent as CloseSvg } from './close.svg'
import styles from './RewardsModalContent.module.scss'

const RewardsModalContent = ({ onClose }) => {

    const giftsFromState = useSelector(state => state.gifts.gifts, shallowEqual);
    const giftsIds = useSelector(state => state.gifts.giftIds, shallowEqual);
    const gifts = giftsFromState.map(item => giftsIds.includes(item.id) ? item : null).filter(item => item !== null)

    return (
        <>
            <div className={styles.modalContent}>
                <Button className={styles.closeBtn} onClick={onClose}><CloseSvg /></Button>
                <h2 className={styles.mainTitle}>Congratulations! You get</h2>
                <ul className={styles.giftsList}>
                    {gifts.map((item) => {
                        return (
                            <li className={styles.giftsListItem}>
                                <img src={item.imageUrl} alt={item.title} className={styles.giftsListImg} />
                                <p className={styles.giftListName}>{item.title}</p>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        </>
    );
}

export default RewardsModalContent;