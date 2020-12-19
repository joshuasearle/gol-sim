import React, { useState } from 'react';

import TickRateSlider from './TickRateSlider';
import StartStopButton from './startStopButton';
import RandomiseButton from './RandomiseButton';
import SpawnChanceSlider from './SpawnChanceSlider';
import ResetButton from './ResetButton';

import classes from '../css/classes';

interface HeaderProps {
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
  currentSpawnChance: number;
  // TODO: Fix type
  spawnChanceChangeHandler: any;
  resetHandler: any;
  oClickHandler: any;
  tClickHandler: any;
}

const Header: React.FC<HeaderProps> = ({
  minTickRate,
  maxTickRate,
  currentTickRate,
  tickChangeHandler,
  running,
  startStopClickHandler,
  randomiseClickHandler,
  currentSpawnChance,
  spawnChanceChangeHandler,
  resetHandler,
  oClickHandler,
  tClickHandler,
}) => {
  const tickSlider = (
    <div>
      <label>Tick Rate</label>
      <TickRateSlider
        minTickRate={minTickRate}
        maxTickRate={maxTickRate}
        currentTickRate={currentTickRate}
        onChangeHandler={tickChangeHandler}
      />
    </div>
  );

  const startStopButton = (
    <div>
      <StartStopButton running={running} clickHandler={startStopClickHandler} />
    </div>
  );

  const randomiseButton = (
    <div>
      <RandomiseButton
        randomiseHandler={randomiseClickHandler}
        running={running}
      />
    </div>
  );

  const spawnRateSlider = (
    <div>
      <label>Spawn Rate</label>
      <SpawnChanceSlider
        currentSpawnChance={currentSpawnChance}
        onChangeHandler={spawnChanceChangeHandler}
      />
    </div>
  );

  const resetButton = (
    <div>
      <ResetButton running={running} resetHandler={resetHandler} />
    </div>
  );

  return (
    <header className={classes.header}>
      <h1>
        Game of Life Simual
        <p style={{ display: 'inline' }} onClick={tClickHandler}>
          t
        </p>
        <p style={{ display: 'inline' }} onClick={oClickHandler}>
          o
        </p>
        r
      </h1>
      <div className={classes.headerOptions}>
        {tickSlider}
        {startStopButton}
        {spawnRateSlider}
        {randomiseButton}
        {resetButton}
      </div>
    </header>
  );
};

export default Header;
