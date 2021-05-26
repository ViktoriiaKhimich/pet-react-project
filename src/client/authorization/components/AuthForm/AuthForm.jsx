import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { initialState } from './initialState'
import { fields } from './fields'
import operations from '../../../../redux/authorization/operations'
import Input from '../../../../shared/components/Input'
import Button from '../../../../shared/components/Button'
import { ReactComponent as Google } from '../../icons/google.svg'

import styles from './AuthForm.module.scss'

const AuthForm = () => {

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(operations.login(formData));
        reset()
    }

    const reset = () => {
        setFormData(initialState)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} >
            <p className={styles.formText}>Вы можете авторизоваться с помощью Google Account:</p>
            <Button className={styles.googleButton}><Google /><span className={styles.googleText}>Google</span></Button>
            <p className={styles.formText}>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</p>
            <label className={styles.formLabel} htmlFor="email"><span className={styles.asterics}>*</span>E-mail:</label>
            <Input className={styles.formInput} value={formData.email} onChange={handleChange} {...fields.email} />
            <label className={styles.formLabel} htmlFor="password"><span className={styles.asterics}>*</span>Пароль:</label>
            <Input className={styles.formInput} value={formData.password} onChange={handleChange} {...fields.password} />
            <Button className={styles.authButton} >Log in</Button>
            <Button className={styles.authButton}>Sign in</Button>
        </form>

    );
}

export default AuthForm;