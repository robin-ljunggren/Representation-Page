import FourBarsWifi from '../img/4bar-wifi.png';
import ThreeBarsWifi from '../img/3bar-wifi.png'
import TwoBarsWifi from '../img/2bar-wifi.png'
import ninetyBattery from '../img/90%-battery.png';
import eightyBattery from '../img/80%-battery.png';
import seventyBattery from '../img/70%-battery.png';
import sixtyBattery from '../img/60%-battery.png';
import halfBattery from '../img/50%-battery.png';
import fourtyBattery from '../img/40%-battery.png';
import thirtyBattery from '../img/30%-battery.png';
import twentyBattery from '../img/20%-battery.png';
import tenBattery from '../img/10%-battery.png';
import twoBattery from '../img/2%-battery.png';

import Sunny from '../img/weather-sunny.png';
import SunnyCloudy from '../img/weather-sunny_cloudy.png';
import SunnyRainy from '../img/weather-sunny_rainy.png';
import Rainy from '../img/weather-rainy.png';
import Cloudy from '../img/weather-cloudy.png';
import Snowy from '../img/weather-snowy.png';
import Thunder from '../img/weather-thunder.png';
import Misty from '../img/weather-misty.png';

import weatherService from '../Services/WeatherService';


function shiftImgSrc(prevRandomNum, setImgSrcState) {

  const sources = [FourBarsWifi, ThreeBarsWifi, TwoBarsWifi];
  const randomNum = Math.floor(Math.random() * 3);
    
  if(randomNum !== prevRandomNum) {

    setImgSrcState(sources[randomNum]);
    prevRandomNum = randomNum;
    
  }else {
    shiftImgSrc();
  } 
}

function drainBattery(setBatteryStatus, batteryStatus, setBatteryImgSrcState) {
  
  if(batteryStatus <= 100) {
    setBatteryStatus(batteryStatus -5);
    setBatteryImgSrcState(ninetyBattery);
  }
  if(batteryStatus <= 90) {
    setBatteryImgSrcState(eightyBattery);
    setBatteryStatus(batteryStatus - 5);
  }
  
  if(batteryStatus <= 80) {
    setBatteryImgSrcState(seventyBattery);
    setBatteryStatus(batteryStatus - 5);
  }
  
  if(batteryStatus <= 70) {
    setBatteryImgSrcState(sixtyBattery);
    setBatteryStatus(batteryStatus - 5);
  }
  
  if(batteryStatus <= 60) {
    setBatteryImgSrcState(halfBattery);
    setBatteryStatus(batteryStatus - 5);
  }
  
  if(batteryStatus <= 50) {
    setBatteryImgSrcState(fourtyBattery);
    setBatteryStatus(batteryStatus - 5);
  }
  
  if(batteryStatus <= 40) {
    setBatteryImgSrcState(thirtyBattery);
    setBatteryStatus(batteryStatus - 5);
  }
  
  if(batteryStatus <= 30) {
    setBatteryImgSrcState(twentyBattery);
    setBatteryStatus(batteryStatus - 5);
  }
  
  if(batteryStatus <= 20) {
    setBatteryImgSrcState(tenBattery);
    setBatteryStatus(batteryStatus - 5);
  }
  
  if(batteryStatus <= 10) {
    setBatteryImgSrcState(tenBattery);
    setBatteryStatus(batteryStatus - 5);
  }
  
  if(batteryStatus <= 5) {
    setBatteryImgSrcState(twoBattery);
    setBatteryStatus(batteryStatus - 1);
  }
  
  if(batteryStatus <= 2) {
    setBatteryImgSrcState(twoBattery);
    setBatteryStatus(batteryStatus -1);
  }
}

async function changeWeatherImg(setWeatherImg) {
  const currentWeather = await weatherService.fetchWeather();
  
  if(currentWeather.weatherId >= 200 && currentWeather.weatherId <= 232) {
    setWeatherImg(Thunder) 
  }else if(currentWeather.weatherId >= 300 && currentWeather.weatherId <= 321) {
    setWeatherImg(SunnyRainy) 
  }else if(currentWeather.weatherId >= 500 && currentWeather.weatherId <= 531) {
    setWeatherImg(Rainy) 
  }else if(currentWeather.weatherId >= 600 && currentWeather.weatherId <= 622) {
    setWeatherImg(Snowy) 
  }else if(currentWeather.weatherId >= 700 && currentWeather.weatherId <= 781) {
    setWeatherImg(Misty) 
  }else if(currentWeather.weatherId === 800) {
    setWeatherImg(Sunny) 
  }else if(currentWeather.weatherId === 801) {
    setWeatherImg(SunnyCloudy) 
  }else if(currentWeather.weatherId >= 802 && currentWeather.weatherId <= 804) {
    setWeatherImg(Cloudy) 
  }
  
  return currentWeather;
}

const dynamics = {shiftImgSrc, drainBattery, changeWeatherImg};
export default dynamics;