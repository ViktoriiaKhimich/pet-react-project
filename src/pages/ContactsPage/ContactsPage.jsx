import React from 'react'
import TeamList from '../../client/team/components/TeamList'
import { teamMembers } from '../../client/team/team'

import styles from './ContactsPage.module.scss'

const ContactsPage = () => {
    return (
        <div className={styles.contactsContainer}>
            <h1 className={styles.title}>Our team</h1>
            <p className={styles.motto}>Always ready for new challenges!</p>
            <TeamList team={teamMembers} />
        </div>
    );
}

export default ContactsPage;