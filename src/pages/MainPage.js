import MainConent from '../components/main_content/MainContent'
import NextWeekCards from '../components/NextWeekCards/NextWeekCards'
import WeatherStats from '../components/WeatherStats/WeatherStats'
import styles from './MainPage.module.css'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import key from '../helpers/key'


const MainPage = (props) =>{

  

    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [weatherResponse, setweatherResponse] = useState([]);
  
    useEffect(() => {
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${props.location.state ? props.location.state: "Warszawa"}&days=3&aqi=no&alerts=no`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          if(result.current){
            setweatherResponse(result);
            setIsLoaded(true);
          }else{
            setError("Nie znaleziono miejscowości!!");
          }    
        },
        (error) => {
          setError(error);
        }
      )
    }, [])


    if (error) {
        return (
            <div className={styles.MainPageError}>Error: {error.toString()}
              <Link to={"/change-location"}>
                <input type="button" value="Znajdź inną" className={styles.okButton}/>
              </Link>
             
            </div>
            
        );
      } else if (!isLoaded) {
        return <div className={styles.MainPage}>
          <img src="https://www.metaweather.com/static/img/weather/c.svg" className={styles.loadingImage} alt="Loading"/>
          Loading...
         
        </div>;
      } else {
        return(
            <div className={styles.Root}>
              <MainConent currentWeather={weatherResponse.current} location={weatherResponse.location}/>
              <WeatherStats weatherStats={[{
                  name: "Humidity",
                  value: weatherResponse.current.humidity
              },{
                  name: "Cloud Percentage",
                  value: weatherResponse.current.cloud
              },
              {
                  name: "UV index",
                  value: weatherResponse.current.uv
              }]}/>
              <NextWeekCards weather={weatherResponse.forecast.forecastday}/>
              Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a> 
              <br/>
              <br/>
            </div>
        )
    }

}

export default MainPage