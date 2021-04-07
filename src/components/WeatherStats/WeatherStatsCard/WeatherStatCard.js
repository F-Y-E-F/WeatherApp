import React from 'react'
import styles from './WeatherStatCard.module.css'
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider"
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
const weatherStatsCard = (props) =>{


    const getUVHighNameFromValue = (value) =>{
        value = parseInt(value)
        if(value<3)return "Low"
        else if(value < 6)return "Moderate" 
        else if(value < 8)return "High" 
        else if(value < 11)return "Very High" 
        else return "Extreme" 
    }

    return (           
        <div className={styles.stats}>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={props.stats.value}
                duration={3}
                easingFunction={easeQuadInOut}
                repeat={false}>
                {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbar
                        value={value}
                        maxValue={props.stats.name === "UV index" ? 12 : 100}
                        text={`${roundedValue} ${props.stats.name === "UV index" ? getUVHighNameFromValue(roundedValue):"%"}`}
                        styles={buildStyles({ pathTransition: "none" ,textSize: props.stats.name === "UV index"? '14px' : '18px'})}
                        />
                );
                }}
            </AnimatedProgressProvider>
            <p className={styles.subtitle}>{props.stats.name}</p>
        </div>
    )
}

export default weatherStatsCard