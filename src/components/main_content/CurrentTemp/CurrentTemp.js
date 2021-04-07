import React from 'react';
import styles from './CurrentTemp.module.css'
import moment from 'moment';

const currentTemp = (props) =>{
    return (
        <div id={styles.container}>
            <div id={styles.temp}>{props.currentWeather.temp_c}°C</div>  
            <p id={styles.name}>{props.currentWeather.condition.text}</p> 
            <p id={styles.updatedTime}>Last Updated {moment(props.currentWeather.last_updated).format("HH:mm")}</p>  
        </div>
    )
}

export default currentTemp