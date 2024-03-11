import React, { useEffect, useRef, useState } from 'react'
import dynamics from '../../../Dynamics/dynamics';
import Sunny from '../../../img/weather-sunny.png';
import RefreshArrow from '../../../img/refresh-arrow.png';
import './WeatherWidget.css';


export default function WeatherWidget() {
  const weather = useRef();
  const [weatherImg, setWeatherImg] = useState(Sunny);
  const [updateWeather, setUpdateWeather] = useState(true);
  const [useEffectUpdater, setUseEffectUpdater] = useState(false);

  function weatherUpdater() {
    setUpdateWeather(true);

    if(!useEffectUpdater) {
      setUseEffectUpdater(true)
    }else {
      setUseEffectUpdater(false)
    }
  }

  useEffect(() => {

    function getWeather() {

      setTimeout(async () => {
        weather.current = await dynamics.changeWeatherImg(setWeatherImg);
        setUpdateWeather(false);
      }, 10000);
      
    }
    getWeather();
  }, [useEffectUpdater]);

  // weather.current.location = "lång textsträng hmm"

  return (
    <div className='widgets-container'>
      <aside className='weather-widget'>
        <div className='icon-temp-container'>
          <img className='weather-icon' alt='icon showing current weather' src={weatherImg} />
          <p className='weather-temp'>{weather.current ? weather.current.temp.toString().slice(0, 2) : "20"}{'°'}</p>
        </div>
        <div className='para-container'>
          <p className='locale-time'>{weather.current ? weather.current.weather : "Sunny"}</p>
          <div className='location-arrow-container'>
            <p className='weather-location'>{weather.current ? weather.current.location : ""}</p>
            <img className={updateWeather ? 'refresh-arrow-active' : 'refresh-arrow'} alt="refresh weather button" src={RefreshArrow} onClick={weatherUpdater}/>
          </div>
        </div>
      </aside>
    </div>
  )
}
