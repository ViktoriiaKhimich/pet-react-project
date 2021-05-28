import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ReactComponent as Logout } from './vector.svg'
import MainNav from '../MainNav'
import { logout } from '../../../../redux/authorization/operations'

import styles from './UserMenu.module.scss'

const UserMenu = () => {
    const email = useSelector(state => state.auth.userEmail);
    const balance = useSelector(state => state.auth.balance)
    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.score}>
                <p className={styles.desc}>Your score:</p>
                <p className={styles.points}>{balance}</p>
            </div>
            <MainNav />
            <div className={styles.user}>
                <p className={styles.email}>{email}</p>
                <button className={styles.btn}><Logout onClick={() => dispatch(logout())} /></button>
            </div>
        </>
    );
}



export default UserMenu;