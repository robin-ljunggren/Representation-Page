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


function shiftSrc(prevRandomNum, setImgSrcState) {

  const sources = [FourBarsWifi, ThreeBarsWifi, TwoBarsWifi];
  const randomNum = Math.floor(Math.random() * 3);
  
  console.log(randomNum);
  console.log(prevRandomNum.current);
    
  if(randomNum !== prevRandomNum.current) {

    setImgSrcState(sources[randomNum]);
    prevRandomNum.current = randomNum;
    console.log("setImgSrcState");
  }else {
    shiftSrc();
    console.log("run func again");
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

const dynamics = {shiftSrc, drainBattery};
export default dynamics;