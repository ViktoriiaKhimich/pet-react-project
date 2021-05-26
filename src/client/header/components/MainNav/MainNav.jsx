import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuItems } from './menu-items'

import styles from './MainNav.module.scss'

const MainNav = () => {
    const links = menuItems.map(({ id, to, text }) => <NavLink className={styles.link} activeClassName={styles.activeLink} key={id} to={to}>{text}</NavLink>)
    return (
        <ul>
            {links}
        </ul>
    );
}

export default MainNav;