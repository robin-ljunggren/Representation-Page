import React, { useEffect, useRef, useState } from 'react'
import dynamics from '../../Dynamics/dynamics';
import Sunny from '../../img/weather-sunny.png';
import RefreshArrow from '../../img/refresh-arrow.png';
import './Widgets.css';
import GetLocale from '../../Services/GetLocale';


export default function Widgets() {
  const weather = useRef();
  const [weatherImg, setWeatherImg] = useState(Sunny);
  const [updateWeather, setUpdateWeather] = useState(true);
  const [useEffectUpdater, setUseEffectUpdater] = useState(false);

  let localeTime = GetLocale.getLocaleTime();

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
        console.log("WC = ", weather.current)
        setUpdateWeather(false);
      }, 10000);
      
    }
    getWeather();
  }, [useEffectUpdater])

  return (
    <div className='widgets-container'>
      <aside className='weather-widget'>
        <img className='weather-icon' alt='icon showing current weather' src={weatherImg} />
        <p className='weather-temp'>{weather.current ? weather.current.temp.toString().slice(0, 2) : "20"}{'°'}</p>
        <div className='para-container'>
          <p className='weather-location'>{weather.current ? weather.current.location : ""}</p>
          <p className='locale-time'>{localeTime.hour}:{localeTime.minute}</p>
          <img className={updateWeather ? 'refresh-arrow-active' : 'refresh-arrow'} alt="refresh weather button" src={RefreshArrow} onClick={weatherUpdater}/>
        </div>
      </aside>
    </div>
  )
}
