import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../../../../shared/components/Logo'
import AuthNav from '../AuthNav'
import UserMenu from '../UserMenu'

import styles from './Header.module.scss'

const Header = () => {

    const isLogined = useSelector(state => state.auth.isLogined)
    return (
        <div className={styles.header}>
            <Logo />
            {isLogined ? <UserMenu /> : <AuthNav />}
            {/* {isLogined && <Redirect to='/tasks' />} */}

        </div>);
}

export default Header;