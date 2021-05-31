import React from 'react'
import styles from './Tab.module.scss'

const Tab = ({ activeTab, label, onClick }) => {

    const style = activeTab === label ? `${styles.tabListItem} ${styles.tabListActive}` : `${styles.tabListItem}`

    return (
        <li className={style} onClick={() => onClick(label)}>
            {label}
        </li>
    );
}

export default Tab;