import React, { useState } from 'react'
import './LockScreen.css';
import LockIcon from '../../img/lock-icon.png';
import PhoneIcon from '../../img/lock-screen-phone.png';
import CameraIcon from '../../img/lock-screen-camera.png';
import BackArrow from '../../img/back-arrow.png';
import GetLocale from '../../Services/GetLocale.js';
import PinPad from '../PinPad/PinPad';


export default function LockScreen(props) {

  const [opaqueScreen, setOpaqueScreen] = useState(true);

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
      setOpaqueScreen(false);
      props.lockedState.setLockedState(false);
    }
  }
  
  function handleOnMouseDown(e) {
    clientYStart = e.clientY;
  }
  function handleOnMouseUp(e) {
    clientYEnd = e.clientY;
    if(clientYStart !== clientYEnd){
      setOpaqueScreen(false);
      props.lockedState.setLockedState(false);
    }
  }
  
  return (
    <>
      {opaqueScreen && (
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
      )}
      {!opaqueScreen && (
        <div className='glassmorphism'>
          <img className='lock-icon' alt="lock icon" src={LockIcon} />
          <PinPad />
          <p className='emergency-call'>{localeLangCode === "sv-SE" ? "Nödsamtal" : "Emergency call"}</p>
          <img className='back-arrow' alt="back arrow icon" src={BackArrow} />
        </div>
      )}
    </>
  )
}
