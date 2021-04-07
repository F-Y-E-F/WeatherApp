import './App.css';
import MainConent from './components/main_content/MainContent';
import NextWeekCards from './components/NextWeekCards/NextWeekCards';
import WeatherStats from './components/WeatherStats/WeatherStats'
import React, { useEffect, useState } from 'react';

const App = () => {
    
  const [error, setError] = useState("JEBAC PIS");
  const [isLoaded, setIsLoaded] = useState(false);
  const [weatherResponse, setweatherResponse] = useState([]);

  useEffect(() => {
    fetch("http://api.weatherapi.com/v1/forecast.json?key=3c6f390fbeca4d32931174752210604&q=Poznan&days=3&aqi=yes&alerts=no")
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
    return <div className="App">Error: {error.toString()}</div>;
  } else if (!isLoaded) {
    return <div className="App">
      <img src="https://www.metaweather.com/static/img/weather/c.svg" className="loadingImage" alt="Loading"/>
      <p id="loading">Loading...</p>
    </div>;
  } else {
    return (
      <div className="Root">
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
   
    );  
  }
}

export default App;
  