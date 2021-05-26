import React from 'react'
import Logo from '../../../../shared/components/Logo'
import AuthNav from '../AuthNav'

import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <AuthNav />
        </div>);
}

export default Header;