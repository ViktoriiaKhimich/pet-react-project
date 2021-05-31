import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tab from '../Tab';
import styles from './Tabs.module.scss'

const Tabs = ({ children }) => {

    console.log(children);
    const [activeTab, setActiveTab] = useState(children[0].label);

    const onClickTabItem = (tab) => {
        setActiveTab(tab)
    }

    const elements = children.map((child) => {
        const { label } = child.props;
        return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />
    })

    return (
        <>
            <div>
                <ol className={styles.daysList}>
                    {elements}
                </ol>
            </div>
            <div>
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </>
    );
}

export default Tabs;