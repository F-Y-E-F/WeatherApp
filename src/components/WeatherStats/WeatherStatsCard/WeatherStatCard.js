import React from 'react'
import styles from './WeatherStatCard.module.css'
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider"
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
const weatherStatsCard = () =>{

    return (           
        <div className={styles.stats}>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={66}
                duration={3}
                easingFunction={easeQuadInOut}
                repeat={false}>
                {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({ pathTransition: "none" })}
                    />
                );
                }}
            </AnimatedProgressProvider>
            <p className={styles.subtitle}>Predication</p>
        </div>
    )
}

export default weatherStatsCard