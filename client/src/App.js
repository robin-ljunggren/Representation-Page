import React, { useRef, useState } from 'react';
import './App.css';
import StatusBar from './Components/StatusBar/StatusBar.js';
import Screen from './Components/Screen/Screen.js';

function App() {

  const turnedOnRef = useRef(false);
  const [turnedOn, setTurnedOn] = useState(false);

  if((!turnedOnRef.current && !turnedOn)) {
    setTimeout(() => {
      turnedOnRef.current = true;
      setTurnedOn(true);
    }, 5500);
  }

  return (
    <>
      {(turnedOnRef.current && turnedOn) && (
        <div>
          <StatusBar />
        </div>
      )}
      {turnedOnRef.current && (<Screen turnedOn={{turnedOn, setTurnedOn}} />)}  
    </>
  );
}

export default App;
