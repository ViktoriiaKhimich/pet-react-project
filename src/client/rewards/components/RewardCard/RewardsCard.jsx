import React, { useState } from 'react'
import styles from './RewardCard.module.scss'
import CheckboxToggle from '../../../../shared/components/CheckboxToggle'

const RewardsCard = ({ title, imageUrl, price, onClick, id }) => {

    const [checked, setChecked] = useState(false);

    return (
        <li className={styles.item}>
            <div>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={styles.description}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.score}>{price}</p>
                </div>
                <div>
                    <CheckboxToggle name='prize' checked={checked} onChange={(e) => { setChecked(e.target.checked); onClick(id, e.target.checked) }} />
                </div>
            </div>
        </li>
    );
}

export default RewardsCard;