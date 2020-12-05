import React, { useState } from 'react';

import TickRateSlider from '../tickRateSlider/TickRateSlider';
import StartStopButton from '../startStopButton/StartStopButton';
import RandomiseButton from '../randomiseButton/RandomiseButton';

interface HeaderProps {
  title: string;
  minTickRate: number;
  maxTickRate: number;
  currentTickRate: number;
  // TODO: Fix type
  tickChangeHandler: any;
  running: boolean;
  // TODO: Fix type
  startStopClickHandler: any;
  // TODO: Fix type
  randomiseClickHandler: any;
}

const Header: React.FC<HeaderProps> = ({
  title,
  minTickRate,
  maxTickRate,
  currentTickRate,
  tickChangeHandler,
  running,
  startStopClickHandler,
  randomiseClickHandler,
}) => {
  const tickSlider = (
    <TickRateSlider
      running={running}
      minTickRate={minTickRate}
      maxTickRate={maxTickRate}
      currentTickRate={currentTickRate}
      onChangeHandler={tickChangeHandler}
    />
  );

  const startStopButton = (
    <StartStopButton running={running} clickHandler={startStopClickHandler} />
  );

  const randomiseButton = (
    <RandomiseButton
      randomiseHandler={randomiseClickHandler}
      running={running}
    />
  );

  return (
    <header>
      <h1>{title}</h1>
      <div>
        <label>Tick Rate</label>
        {tickSlider}
        {startStopButton}
        {randomiseButton}
      </div>
    </header>
  );
};

export default Header;
