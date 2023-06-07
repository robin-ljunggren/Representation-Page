import { useEffect, useRef, useState } from 'react';
import './StatusBar.css';
import { extractUserAgent } from '../../Services/UserAgent.js';
import powerSavingMode from '../../img/power-saving-mode.png';
import alarmClock from '../../img/alarm-clock-logo.png';
import FourBarsWifi from '../../img/4bar-wifi.png';
import fiveG from '../../img/5G-logo.png';
import signalStatus from '../../img/signal-bar.png';
import fullBattery from '../../img/100%-battery.png';
import dynamics from '../../Dynamics/dynamics';


export default function StatusBar(props) {

  const [operator, setOperator] = useState(undefined);
  const [batteryStatus, setBatteryStatus] = useState(100);
  const [wifiImgSrcState, setWifiImgSrcState] = useState(FourBarsWifi);
  const [batteryImgSrcState, setBatteryImgSrcState] = useState(fullBattery);
  const prevRandomNum = useRef();

  useEffect(() => {
    setOperator(extractUserAgent());
  }, [props.running]);


  useEffect(() => {
    const randomTime = Math.floor(Math.random() * 55000) + 5000;
    console.log(randomTime);

    setTimeout(() => {

      dynamics.shiftSrc(prevRandomNum, setWifiImgSrcState);
      console.log("SetTimeout");
    }, randomTime)
  }, [wifiImgSrcState])
  
  if(batteryStatus > 0) {
    setTimeout(() => {

      dynamics.drainBattery(
        setBatteryStatus, batteryStatus, setBatteryImgSrcState
      );

    }, 300000);
  }
  
  

  return (
    <>
      <aside className="status-bar">
        <p className="operator">{operator}</p>
        <div className='images-container'>
          <img className='power-saving-mode' alt="power saving mode" src={powerSavingMode}/>
          <img className='alarm-clock' alt="alarm clock" src={alarmClock}/>
          <img className='wifi-signal' alt="wifi signal" src={wifiImgSrcState}/>
          <img className='five-g' alt="five g" src={fiveG}/>
          <img className='signal-status' alt="signal bars" src={signalStatus}/>
          <p className='battery-status'>{batteryStatus}%</p>
          <img className='battery-logo' alt="battery" src={batteryImgSrcState}/>
        </div>
      </aside>
    </>
  )
}