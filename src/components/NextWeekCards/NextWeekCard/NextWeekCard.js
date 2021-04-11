import React, { useState } from 'react'
import getImages from '../../../helpers/Images'
import styles from './NextWeekCard.module.css'
import moment from 'moment';
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from './NextWeekCard.module.css';
const NextWeekCard = (props) =>{
    
    const url = getImages(props.weatherState.condition.code)
    
    const [isOpen, setIsOpen] = useState(false)

    let forecastClass=''

    if(!isOpen){
        forecastClass = classes.closeForecast
    }else{
        forecastClass = classes.openForecast
    }

    return(
        <div className={styles.nextWeekCard}>
            <p className={styles.dayName}>{moment(props.date).format("ddd")}</p>
            <div className={styles.temperatures}>
                <p className={styles.maxTemp}>{props.weatherState.maxtemp_c}°C</p>
                <p className={styles.minTemp}>/{props.weatherState.mintemp_c}°C</p> 
            </div>
            <img src={url} className={styles.photo} alt="weather_state"/>
            <div onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                <MdKeyboardArrowDown size={30} className={!isOpen ? styles.openForecastButton : styles.closeForecastButton}/>
            </div>
            <div className={forecastClass}> 
                {props.hoursWeather.map((hourEl) => {
                    const imageUrl = getImages(hourEl.condition.code)
                    return( 
                    <div className={styles.hourlyWeatherWrapper} key={hourEl.time_epoch}>
                        {moment(hourEl.time).format("HH:mm")}
                        <div className={styles.temperature}>{hourEl.temp_c}°C</div>
                        <img src={imageUrl} className={styles.smallImage} alt="weather_image"/>
                    </div>
                        
                    )
                })}
            </div>
        </div>
    )

}

export default NextWeekCard