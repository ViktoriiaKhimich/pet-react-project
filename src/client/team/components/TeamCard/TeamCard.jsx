import React from 'react'
import PropTypes from 'prop-types';

import styles from './TeamCard.module.scss'

const TeamCard = ({ src, name, position, desc }) => {
    return (
        <li className={styles.card}>
            <img src={src} alt={name} className={styles.image} />
            <div className={styles.memberDesc}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.position}>{position}</p>
                <p className={styles.description}>{desc}</p>
            </div>
        </li>
    );
}

export default TeamCard;