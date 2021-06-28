import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ReactComponent as Logout } from './vector.svg'
import MainNav from '../MainNav'
import { logout } from '../../../../redux/authorization/operations'

import styles from './UserMenu.module.scss'

const UserMenu = () => {

    const email = useSelector(state => state.auth.userEmail);

    let balance = useSelector(state => state.auth.balance, shallowEqual)
    const updatedBalance = useSelector(state => state.tasks.updatedBalance, shallowEqual);
    if (updatedBalance) {
        balance = updatedBalance
    }

    const dispatch = useDispatch();

    return (
        <>
            <div className={styles.score}>
                <p className={styles.desc}>Your score:</p>
                <p className={styles.points}>{balance}</p>
            </div>
            <div className={styles.mainNav}>
                <MainNav />
                <div className={styles.user}>
                    <p className={styles.email}>{email}</p>
                    <button className={styles.btn}><Logout onClick={() => dispatch(logout())} /></button>
                </div>
            </div>
        </>
    );
}



export default UserMenu;