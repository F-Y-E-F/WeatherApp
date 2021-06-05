
import React,{useState} from 'react'
import styles from './ChangeLocation.module.css'
import {Link} from 'react-router-dom';

const ChangeLocation = () =>{

 
    const [country, setCountry] = useState("Warszawa")

    return (
        <div className={styles.wrapper}>
            <input type="text" className={styles.locationInput} placeholder="Write Location" onChange={(event)=>setCountry(event.target.value)}/>
            <br/>
            <Link to={{
                    pathname: "/",
                    state: country
                }}>
                <input type="button" className={styles.searchButton} value="Wyszukaj" />
            </Link>
            
        </div>
    )
}

export default ChangeLocation;