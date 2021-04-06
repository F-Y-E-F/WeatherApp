import React from 'react'
import moment from 'moment';
import styles from './MainContent.module.css'
import CurrentTemp from './CurrentTemp/CurrentTemp'


const mainConent = () => {


    return (
        <div>
            <div id={styles.title}>Belgrade, Serbia</div>
            <div id={styles.date}>{moment().format("ddd, DD MMM YYYY")}</div>
            <div className={styles.flexContainer}>
                <CurrentTemp/>
                <img src="https://www.metaweather.com/static/img/weather/s.svg" className={styles.photo} alt="current weather"/>
            </div>
            <div className={styles.flexContainer}>
                <p className={styles.stats}>Barometer 1009HpA</p>
                <p className={styles.stats}>Feels like 25 °C</p>
                <p className={styles.stats}>Huminity 41%</p>
            </div>
        </div>
    )

}

export default mainConent