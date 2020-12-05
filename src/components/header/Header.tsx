import React, { useState } from 'react';

import TickRateSlider from '../tickRateSlider/TickRateSlider';
import StartStopButton from '../startStopButton/StartStopButton';

interface HeaderProps {
  title: string;
  minTickRate: number;
  maxTickRate: number;
  initialTickRate: number;
}

const Header: React.FC<HeaderProps> = ({
  title,
  minTickRate,
  maxTickRate,
  initialTickRate,
}) => {
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

  const tickSlider = (
    <TickRateSlider
      minTickRate={minTickRate}
      maxTickRate={maxTickRate}
      currentTickRate={currentTickRate}
      onChangeHandler={tickChangeHandler}
    />
  );

  return (
    <header>
      <h1>{title}</h1>
      <div>
        <label>Tick Rate</label>
        {tickSlider}
        <StartStopButton
          running={running}
          clickHandler={startStopClickHandler}
        />
      </div>
    </header>
  );
};

export default Header;
