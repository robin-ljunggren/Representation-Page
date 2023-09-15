import React, { useState } from 'react'
import './Screen.css';
import LockIcon from '../../img/lock-icon.png';
import BackArrow from '../../img/back-arrow.png';
import GetLocale from '../../Services/GetLocale.js';
import LockedScreen from '../LockedScreen/LockedScreen';
import UnlockedScreen from '../UnlockedScreen/UnlockedScreen.js';
import PinPad from '../PinPad/PinPad';


export default function Screen() {

  const [opaqueScreen, setOpaqueScreen] = useState(true);
  const [locked, setLocked] = useState(true)
  
  let localeLangCode = GetLocale.getLocaleLang();
 
  return (
    <>
      {opaqueScreen && locked && (
        <LockedScreen setOpaqueScreen={setOpaqueScreen}/>
      )}
      {!opaqueScreen && locked && (
        <div className='glassmorphism'>
          <img className='lock-icon' alt="lock icon" src={LockIcon} />
          <PinPad setOpaqueScreen={setOpaqueScreen} setLocked={setLocked} />
          <p className='emergency-call'>{localeLangCode === "sv-SE" ? "Nödsamtal" : "Emergency call"}</p>
          <img className='back-arrow' alt="back arrow icon" src={BackArrow} />
        </div>
      )}
      {opaqueScreen && !locked && (
       <UnlockedScreen />
      )}
    </>
  )
}
