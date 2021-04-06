import React from 'react'
import NextWeekCard from './NextWeekCard/NextWeekCard'
import styles from './NextWeekCards.module.css'
const nextWeekCards = () =>{

    return(
        <div id={styles.nextWeekContainer}>
            <NextWeekCard/>
            <NextWeekCard/>
            <NextWeekCard/>
            <NextWeekCard/>
            <NextWeekCard/>
            <NextWeekCard/>
        </div>
    )

}

export default nextWeekCards