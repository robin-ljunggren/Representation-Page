import React, { useEffect, useRef, useState } from 'react'
import dynamics from '../../Dynamics/dynamics';
import Sunny from '../../img/weather-sunny.png';
import RefreshArrow from '../../img/refresh-arrow.png';
import './Widgets.css';
import GetLocale from '../../Services/GetLocale';


export default function Widgets() {
  const weather = useRef();
  const [weatherImg, setWeatherImg] = useState(Sunny);

  let localeTime = GetLocale.getLocaleTime();

  useEffect(() => {
    async function getWeather() {
      weather.current = await dynamics.changeWeatherImg(setWeatherImg);
      console.log("WC = ", weather.current)
    }
    getWeather();
  }, [])

  return (
    <div className='widgets-container'>
      <aside className='weather-widget'>
        <img className='weather-icon' alt='icon showing current weather' src={weatherImg} />
        <p className='weather-temp'>{weather.current ? weather.current.temp.toString().slice(0, 2) : "Error"}{'°'}</p>
        <div className='para-container'>
          <p className='weather-location'>{weather.current ? weather.current.location : "Error"}</p>
          <p className='locale-time'>{localeTime.hour}:{localeTime.minute}</p>
          <img className='refresh-arrow' alt="refresh weather button" src={RefreshArrow}/>
        </div>
      </aside>
    </div>
  )
}
