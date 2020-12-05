import React, { useState } from 'react';

import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import { title, minTickRate, maxTickRate, initialTickRate } from './constants';

const App: React.FC = () => {
  const [currentTickRate, setCurrentTickRate] = useState(initialTickRate);
  // Initially, the simulation is not running
  const [running, setRunning] = useState(false);

  const tickChangeHandler = (event: any) => {
    console.log(event.target.value);
    setCurrentTickRate(event.target.value);
  };

  const startStopClickHandler = () => {
    console.log('start / stop pressed');
    // Toggle running
    setRunning(!running);
  };

  const randomiseClickHandler = () => {
    console.log('randomise board');
  };

  return (
    <>
      <Header
        title={title}
        minTickRate={minTickRate}
        maxTickRate={maxTickRate}
        currentTickRate={currentTickRate}
        tickChangeHandler={tickChangeHandler}
        startStopClickHandler={startStopClickHandler}
        running={running}
        randomiseClickHandler={randomiseClickHandler}
      />
      <Body />
      <Footer />
    </>
  );
};

export default App;
