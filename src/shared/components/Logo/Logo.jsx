import React from 'react'
import { ReactComponent as LogoIcon } from './logo.svg'

import styles from './Logo.module.css'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <p className={styles.logoText}>KidsLike</p>
            <LogoIcon />
        </div>
    );
}

export default Logo;