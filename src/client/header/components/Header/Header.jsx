import React from 'react'
import { Redirect, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo from '../../../../shared/components/Logo'
import AuthNav from '../AuthNav'
import UserMenu from '../UserMenu'

import styles from './Header.module.scss'

const Header = () => {

    const isLogined = useSelector(state => state.auth.isLogined)
    return (
        <div className={styles.header}>
            <NavLink to='/' exact style={{ textDecoration: 'none', color: '#000000' }}><Logo /></NavLink>
            {isLogined ? <UserMenu /> : <AuthNav />}
            {isLogined ? <Redirect to='/' /> : <Redirect to='/authorization' />}
        </div>);
}

export default Header;