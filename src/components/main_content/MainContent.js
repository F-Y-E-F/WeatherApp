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
                <img src="https://www.metaweather.com/static/img/weather/png/s.png"/>
            </div>
        </div>
    )

}

export default mainConent