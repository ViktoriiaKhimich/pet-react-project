import React from 'react'
import PropTypes from 'prop-types';
import TeamCard from '../TeamCard';

import styles from './TeamList.module.scss'

const TeamList = ({ team }) => {
    const teamElements = team.map(({ id, ...props }) => <TeamCard key={id} {...props} />)
    return (
        <ul className={styles.teamList}>{teamElements}</ul>
    );
}

export default TeamList;