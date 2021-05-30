import React, { useState } from 'react'
import MultipleCheckbox from '../../../../shared/components/MultipleCheckbox'
import Button from '../../../../shared/components/Button'
import { dayList } from './days'

import styles from './DaysSelect.module.scss'


const DaysSelect = ({ handleCheck }) => {

    const week = dayList.map(({ days, name }, idx) => <MultipleCheckbox key={name} name={name} label={days} checked={days[idx]} onChange={() => handleCheck(idx)} />)

    return (
        <div className={styles.group}>
            {week}
        </div>
    )
}

export default DaysSelect;