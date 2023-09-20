import React from 'react';
import BackArrow from '../../img/back-arrow.png';
import HomeButton from '../../img/home-button.png';
import PrevAppsButton from '../../img/last-apps.png';
import '../HomeButtons/HomeButtons.css';


export default function HomeButtons() {

  

  return (
    <>
      <div className='home-btns-container'>
        <img className='prev-apps-btn' alt="previous opened apps button" src={PrevAppsButton} />
        <img className='home-btn' alt="home button" src={HomeButton} />
        <img className='back-arrow-home' alt="back one step button" src={BackArrow} />
      </div>
    </>
  )
}
