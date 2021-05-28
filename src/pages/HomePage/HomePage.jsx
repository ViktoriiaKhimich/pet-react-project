import React from 'react'
import pic from './heroImage.png';
import Button from '../../shared/components/Button'
import styles from './HomePage.module.scss'

const HomePage = () => {

    const bgImage = pic;

    return (<>

        <div className={styles.heroContainer}>
            <div className={styles.weekInfo}>
                <div>
                    <h2 className={styles.week}>Week: 24-30, May</h2>
                    <p className={styles.days}><span className={styles.tasks}>My tasks:</span> Thursday 27-05-2021</p>
                </div>
                <div className={styles.stats}>
                    <p className={styles.points}>Gained points for this week: 0</p>
                    <p className={styles.points}>Planned points for this week: 0</p>
                    <div className={styles.bar}>
                        <p className={styles.total}>0 / 0</p>
                        <span className={styles.scale}></span>
                    </div>
                </div>
            </div>
            <div>
                <h3 className={styles.title}>No tasks for this week</h3>
                <Button className={styles.btn}>Plan tasks</Button>

                <div className={styles.bgImage}>
                    <img src={bgImage} alt="" />
                </div>
            </div>
        </div>
    </>);
}

export default HomePage;