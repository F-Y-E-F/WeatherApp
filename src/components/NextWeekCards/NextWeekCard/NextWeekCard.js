import React from 'react'
import getImages from '../../../helpers/Images'
import styles from './NextWeekCard.module.css'
const nextWeekCard = (props) =>{
    
    const url = getImages(props.weatherState.condition.code)
    
    return(
        <div className={styles.nextWeekCard}>
            <p className={styles.dayName}>Mon</p>
            <div className={styles.temperatures}>
                <p className={styles.maxTemp}>{props.weatherState.maxtemp_c}°C</p>
                <p className={styles.minTemp}>/{props.weatherState.mintemp_c}°C</p>
            </div>
            <img src={url} className={styles.photo} alt="weather_state "/>
        </div>
    )

}

export default nextWeekCard