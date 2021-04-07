
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import styles from './WeatherStats.module.css'
import WeatherStatsCard from './WeatherStatsCard/WeatherStatCard';


const weatherStats = (props) => {

    

    return(
        <div id={styles.statsContainer}>
            {props.weatherStats.map((stat) => {
                return <WeatherStatsCard stats={stat} key={stat.name}/>
            })}
        </div>
    )
}
export default weatherStats;