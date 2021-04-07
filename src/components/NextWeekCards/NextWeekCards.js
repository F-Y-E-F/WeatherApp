import React from 'react'
import NextWeekCard from './NextWeekCard/NextWeekCard'
import styles from './NextWeekCards.module.css'
const nextWeekCards = (props) =>{

    return(
        <div id={styles.nextWeekContainer}>
            {props.weather.map((weatherState) => <NextWeekCard key={weatherState.date_epoch} weatherState={weatherState.day}/> )}
        </div>
    )

}

export default nextWeekCards