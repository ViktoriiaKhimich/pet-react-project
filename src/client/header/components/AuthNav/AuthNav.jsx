import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuItems } from './menu-items'

const AuthNav = () => {
    const menuElements = menuItems.map(({ id, to, text }) => { return <NavLink key={id} to={to}>{text}</NavLink> })
    return (
        <nav>
            {menuElements}
        </nav>
    );
}

export default AuthNav;