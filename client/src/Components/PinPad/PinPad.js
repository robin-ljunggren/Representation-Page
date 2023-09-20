import React, { useReducer, useRef, useState } from 'react'
import './PinPad.css';
import EraseLeft from '../../img/erase-left.png';
import GetLocale from '../../Services/GetLocale';


const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
}

function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return { count: state.count + 1}
    case "decrement":
      return { count: state.count - 1}
    case "reset":
      return { count: 0}
    default:
      return state;
  }
}

export default function PinPad(props) {

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [pinState, setPinState] = useState(false);
  const [pinCode, setPinCode] = useState();
  const [secretVal, setSecretVal] = useState([])
  const [hideValue, setHideValue] = useState(false);
  const btnsClassRef = useRef();
  const [pinSecretClass, setPinSecretClass] = useState('secret');
  const [disabled, setDisabled] = useState(false);

  let localeLangCode = GetLocale.getLocaleLang();

  let padArr = [
    "1", "2", "3",
    "4", "5", "6", 
    "7", "8", "9", 
    "0", "OK"
  ];

  let pinPad = padArr.map(item => <button className={padArr.indexOf(item)} id={padArr.indexOf(item)} key={crypto.randomUUID()}>{item}</button>);

  if(pinPad[9]){

    let object = pinPad[9];

    let imgTag = <img className='erase-left' alt="erase arrow left" src={EraseLeft} />

    let remodeledObject = { ...object, props: {classname: 9, id: 9, children: imgTag}};

    pinPad.splice(9, 0, remodeledObject);
  }

  let pinPadProps = [];

  for(let i = 0; i < pinPad.length; i++) {
    pinPadProps.push(pinPad[i].props.children);
  }

  function handleClick(e) {
    e.preventDefault();
    let btnValue = e.target.textContent;
    let count = state.count;
    
    if((btnValue && btnValue !== "OK" && count < 17)) {
      count = count + 1;
      if(count === 0) {
        count = count - 1;
      }
      dispatch({type: ACTIONS.INCREMENT});
      setPinState(true);
      btnsClassRef.current = "btn-container";
      addDigits(btnValue);
    
    }else if(btnValue === "OK"){

      if(count >= 4) { 
        dispatch({type: ACTIONS.RESET});
        setPinState(false);
        setPinCode([]);
        setSecretVal([]);
        btnsClassRef.current = "";
        props.setOpaqueScreen(true);
        props.setLocked(false);

      }else {
        setPinSecretClass('wrong-pin');
        setDisabled(true);

        setTimeout(() => {
          setPinSecretClass('secret');
          dispatch({type: ACTIONS.RESET});
          setPinState(false);
          setPinCode([]);
          setSecretVal([]);
          btnsClassRef.current = "";
          setDisabled(false);
        }, 4000);
      }
      

    }else if(count === 17 || (!btnValue && count === 0)){
      
      dispatch({type: ""});

    }else if(!btnValue && count > 0) {

      count = count + 1;

      if(count > 1) {
        count = count - 2;
      }

      dispatch({type: ACTIONS.DECREMENT});
      removeDigits();
    };
    
    if(count === 0) {
      setPinState(false);
      btnsClassRef.current = ""
    };
  }
  
  function addDigits(btnValue) {
    setPinCode(btnValue);
    setHideValue(false);
    setTimeout(() => {
      setHideValue(true);
      setSecretVal([...secretVal, <span className='secret-val' key={secretVal}></span>])
    }, 350);
  }

  function removeDigits() {
    secretVal.pop();
  }
  
  return (
      <form className='pin-pad-form'>
        {!pinState && (
          <div >
            <p className='para-enter-pin'>{localeLangCode === "sv-SE" ? "Ange PIN" : "Enter PIN"}</p>
            <p className='para-pin-contains'>{localeLangCode === "sv-SE" ? "Pinkoden innehåller minst 4 siffror" : "Your PIN contains at least 4 digits"}</p>
          </div>
        )}
        {pinState && (
          <div className='pin-container'>
            <p className={pinSecretClass}>{pinSecretClass === 'secret' ? secretVal : localeLangCode === "sv-SE" ? "Fel PIN-kod har angetts" :  "Incorrect PIN entered"}</p>
            <p className='pin-code'>{hideValue ? "" : pinCode}</p>
          </div>
        )}
        <div className={btnsClassRef.current} >{pinPadProps.map(button => <button key={crypto.randomUUID()} disabled={disabled} onClick={handleClick}>{button}</button>)}</div>
      </form>
    
  )
}
