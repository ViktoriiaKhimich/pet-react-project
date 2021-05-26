import React from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as Logout } from './vector.svg'
import MainNav from '../MainNav'

import styles from './UserMenu.module.scss'

const UserMenu = ({ onLogout }) => {
    const email = useSelector(state => state.auth.userEmail);

    return (
        <>
            <div className={styles.score}>
                <p className={styles.desc}>Your score:</p>
                <p className={styles.points}>123</p>
            </div>
            <MainNav />
            <div className={styles.user}>
                <p className={styles.email}>{email}</p>
                <Logout onClick={onLogout} />
            </div>
        </>
    );
}



export default UserMenu;