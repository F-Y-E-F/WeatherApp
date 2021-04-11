import React from 'react'
import moment from 'moment';
import styles from './MainContent.module.css'
import CurrentTemp from './CurrentTemp/CurrentTemp'
import getImages from '../../helpers/Images';
import { Fab } from '@material-ui/core';
import { MdEdit } from "react-icons/md";

const mainConent = (props) => {

    if(props.currentWeather){
        const url = getImages(props.currentWeather.condition.code)
        return (
            <div>
                <div id={styles.title}>{props.location.name}, {props.location.country} 
                    <Fab aria-label="add" elevation={0} style={{boxShadow: "none",marginLeft:'20px'}} size="small"  >
                        <MdEdit size={18} />
                    </Fab>
                </div>
                <div id={styles.date}>{moment().format("ddd, DD MMM YYYY")}</div>
                <div className={styles.flexContainer}>
                    <CurrentTemp currentWeather={props.currentWeather}/>
                    <img src={url} className={styles.photo} alt="current weather"/>
                </div>
                <div className={styles.flexContainer}>
                    <p className={styles.stats}>Pressure {props.currentWeather.pressure_mb}HPa</p>
                    <p className={styles.stats}>Feels like {props.currentWeather.feelslike_c}°C</p>
                    <p className={styles.stats}>Huminity {props.currentWeather.humidity}%</p>
                </div>
            </div>
        )
    }
    return null
}

export default mainConent