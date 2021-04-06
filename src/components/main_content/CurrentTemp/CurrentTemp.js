import React from 'react';
import styles from './CurrentTemp.module.css'

const currentTemp = () =>{
    return (
        <div id={styles.container}>
            <div id={styles.temp}>23°C</div>  
            <p id={styles.name}>Partly sunny</p> 
            <p id={styles.updatedTime}>Updated: 1:48 PM</p>  
        </div>
    )
}

export default currentTemp