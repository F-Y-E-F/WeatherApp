
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import styles from './WeatherStats.module.css'
import WeatherStatsCard from './WeatherStatsCard/WeatherStatCard';


const weatherStats = () => {

    return(
        <div id={styles.statsContainer}>
            <WeatherStatsCard/>
            <WeatherStatsCard/>
            <WeatherStatsCard/>
        </div>
    )
}
export default weatherStats;