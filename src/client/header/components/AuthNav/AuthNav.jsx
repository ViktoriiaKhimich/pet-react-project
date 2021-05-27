import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuItems } from './menu-items'

import styles from './AuthNav.module.scss'

const AuthNav = () => {
    const menuElements = menuItems.map(({ id, to, text }) => { return <NavLink className={styles.authLink} exact activeClassName={styles.activeAuthLink} key={id} to={to}>{text}</NavLink> })
    return (
        <nav>
            {menuElements}
        </nav>
    );
}

export default AuthNav;