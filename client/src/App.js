import React, { useRef, useState } from 'react';
import './App.css';
import StatusBar from './Components/StatusBar/StatusBar.js';
import LockScreen from './Components/LockScreen/LockScreen.js';

function App() {

  const lockedRef = useRef(false);
  const [lockedState, setLockedState] = useState(false);

  if((!lockedRef.current && !lockedState)) {
    setTimeout(() => {
      lockedRef.current = true;
      setLockedState(true);
    }, 5500);
  }

  return (
    <>
      {(lockedRef.current && lockedState) && (
        <div>
          <StatusBar lockedState={lockedState}/>
        </div>
      )}
      {lockedRef.current && (<LockScreen lockedState={{lockedState, setLockedState}} />)}  
    </>
  );
}

export default App;
