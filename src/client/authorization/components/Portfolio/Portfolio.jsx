import React from 'react'
import image1 from './images/pic1.png'
import image2 from './images/pic2.png'
import image3 from './images/pic3.png'
import image4 from './images/pic4.png'

import styles from './Portfolio.module.scss'

const Portfolio = () => {
    const photo1 = image1;
    const photo2 = image2;
    const photo3 = image3;
    const photo4 = image4;
    return (
        <div className={styles.imagesContainer}>
            <img src={photo1} alt="" />
            <img src={photo2} alt="" className={styles.imageTwo} />
            <img src={photo3} alt="" className={styles.imageThree} />
            <img src={photo4} alt="" className={styles.imageFour} />
        </div>
    );
}

export default Portfolio;