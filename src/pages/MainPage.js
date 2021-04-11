import MainConent from '../components/main_content/MainContent'
import NextWeekCards from '../components/NextWeekCards/NextWeekCards'
import WeatherStats from '../components/WeatherStats/WeatherStats'
import styles from './MainPage.module.css';
import React, { useEffect, useState } from 'react';
const MainPage = () =>{


    const [error, setError] = useState("JEBAC PIS");
    const [isLoaded, setIsLoaded] = useState(false);
    const [weatherResponse, setweatherResponse] = useState([]);
  
    useEffect(() => {
      fetch("https://api.weatherapi.com/v1/forecast.json?key=3c6f390fbeca4d32931174752210604&q=Czyzowice&days=3&aqi=no&alerts=no")
      .then(res => res.json())
      .then(
        (result) => {
          setweatherResponse(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }, [])


    if (!error) {
        return <div className={styles.App}>Error: {error.toString()}</div>;
      } else if (!isLoaded) {
        return <div className={styles.App}>
          <img src="https://www.metaweather.com/static/img/weather/c.svg" className="loadingImage" alt="Loading"/>
          <p id="loading">Loading...</p>
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
            </div>
        )
    }

}

export default MainPage