import React from 'react'
import WeatherWidget from '../Widgets/WeatherWidget/WeatherWidget.js';
import CalendarWidget from '../Widgets/CalendarWidget/CalendarWidget.js';
import './HomeScreen.css';

export default function HomeScreen() {
  return (
    <div className='home-screen'>
      <WeatherWidget />
      <CalendarWidget />
    </div>
  )
}
