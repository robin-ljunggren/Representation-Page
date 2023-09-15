import React from 'react'
import PhoneIcon from '../../img/lock-screen-phone.png';
import LockIcon from '../../img/lock-icon.png';
import CameraIcon from '../../img/lock-screen-camera.png';
import GetLocale from '../../Services/GetLocale.js';
import './LockedScreen.css';


export default function LockedScreen(props) {

  let clientYStart;
  let clientYEnd;

  let localeTime = GetLocale.getLocaleTime();
  let localeDate = GetLocale.getLocaleDate();
  let localeLangCode = GetLocale.getLocaleLang();

  function handleTouchStart(e) {
    clientYStart = e.touches[0].clientY;
  }
  function handleTouchEnd(e) {
    clientYEnd = e.changedTouches[0].clientY;

    if(clientYStart !== clientYEnd){
      props.setOpaqueScreen(false);
      props.lockedState.setLockedState(false);
    }
  }
  
  function handleOnMouseDown(e) {
    clientYStart = e.clientY;
  }
  function handleOnMouseUp(e) {
    clientYEnd = e.clientY;
    if(clientYStart !== clientYEnd){
      props.setOpaqueScreen(false);
      props.lockedState.setLockedState(false);
    }
  }

  return (
    <section className="lock-screen" 
          onTouchStart={handleTouchStart} 
          onTouchEnd={handleTouchEnd} 
          onMouseDown={handleOnMouseDown} 
          onMouseUp={handleOnMouseUp}
          >
          <img className='lock-icon' alt="lock icon" src={LockIcon} />
          <div className='lock-screen-clock'>
            <p className='hour'>{localeTime.hour}</p>
            <p className='minute'>{localeTime.minute}</p>
          </div>
          <p className='lock-screen-date'>{localeDate}</p>
          <p className='swipe-to-unlock'>{localeLangCode === "sv-SE" ? "Svep för att låsa upp" : "Swipe to unlock"}</p>
          <div className='phone-and-camera'>
            <img className='phone-icon' alt="phone icon" src={PhoneIcon}/>
            <img className='camera-icon' alt="camera icon" src={CameraIcon}/>
          </div>
        </section>
  )
}
