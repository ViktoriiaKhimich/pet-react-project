import React from 'react'
import AuthForm from '../../client/authorization/components/AuthForm'
import Portfolio from '../../client/authorization/components/Portfolio'

import styles from './AuthorizationPage.module.scss'


const AuthorizationPage = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.porfolio}>
                <Portfolio />
            </div>
            <div className={styles.authContainer}>
                <h1 className={styles.heroTitle}>Achieve goals, get awesome rewards!</h1>
                <AuthForm />
            </div>
        </div>
    );
}

export default AuthorizationPage;