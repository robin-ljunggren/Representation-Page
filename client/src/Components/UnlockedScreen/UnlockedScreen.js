import React from 'react';
import './UnlockedScreen.scss';
import HomeButtons from '../HomeButtons/HomeButtons';
import HomeScreen from '../HomeScreen/HomeScreen';

export default function UnlockedScreen() {

  return(
      <section className='unlocked-screen'>
        <HomeScreen />
        <HomeButtons />
      </section>
  )
}