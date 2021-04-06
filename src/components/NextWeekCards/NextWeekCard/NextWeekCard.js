import React from 'react'
import styles from './NextWeekCard.module.css'
const nextWeekCard = () =>{
    return(
        <div className={styles.nextWeekCard}>
            <p className={styles.dayName}>Mon</p>
            <div className={styles.temperatures}>
                <p className={styles.maxTemp}>24°C</p>
                <p className={styles.minTemp}>/11°C</p>
            </div>
            <img src="https://www.metaweather.com/static/img/weather/s.svg" className={styles.photo} alt="weather_state "/>
        </div>
    )

}

export default nextWeekCard