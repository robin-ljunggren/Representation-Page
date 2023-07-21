import React, {useState} from 'react';
import './UnlockedScreen.css';

export default function UnlockedScreen() {

  const [unlocked, setUnlocked] = useState();

  return(
    <>
     {unlocked && (
      <section>
        <img />
      </section>
      )}
    </>
  )
}