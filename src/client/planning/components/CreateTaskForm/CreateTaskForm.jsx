import React, { useState } from 'react'
// import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import { initialState } from './initialState'
import { fields } from './fields'
import { createNewTask } from '../../../../redux/planning/operations'
import Input from '../../../../shared/components/Input'
import Button from '../../../../shared/components/Button'
import { ReactComponent as Pen } from './pen.svg'

import styles from "./CreateTaskForm.module.scss"
import image from './robot.png'

const CreateTaskFrom = ({ onClose }) => {

    const [data, setData] = useState(initialState);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createNewTask(data))
        reset()
    }

    const reset = () => {
        setData(initialState)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <img src={image} alt="" />
            <div className={styles.input}>
                <Pen />
                <Input value={data.title} {...fields.title} onChange={handleChange} className={styles.field} />
            </div>
            <div className={styles.input}>
                <Pen />
                <Input value={data.reward} {...fields.reward} onChange={handleChange} className={styles.field} />
            </div>
            <Button type='submit' className={styles.btn} onClick={onClose}>Ok</Button>
        </form>
    )
}

export default CreateTaskFrom;