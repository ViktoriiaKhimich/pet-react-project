import React from 'react'
import AuthForm from '../../client/authorization/components/AuthForm'
import TasksList from '../../client/tasks/components/TasksList'

import styles from './AuthorizationPage.module.scss'


const AuthorizationPage = () => {
    return (<>
        <div className={styles.authContainer}>
            <h1 className={styles.heroTitle}>Выполняй задания, получи классные призы!</h1>
            <AuthForm />
        </div>
    </>);
}

export default AuthorizationPage;