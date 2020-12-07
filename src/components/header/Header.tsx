import React, { useState } from 'react';

import TickRateSlider from '../tickRateSlider/TickRateSlider';
import StartStopButton from '../startStopButton/StartStopButton';
import RandomiseButton from '../randomiseButton/RandomiseButton';
import SpawnChanceSlider from '../spawnChanceSlider/SpawnChanceSlider';

import classes from '../../css/classes';

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
  currentSpawnChance: number;
  // TODO: Fix type
  spawnChanceChangeHandler: any;
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
  currentSpawnChance,
  spawnChanceChangeHandler,
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

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <div className={classes.headerOptions}>
        {tickSlider}
        {startStopButton}
        {spawnRateSlider}
        {randomiseButton}
      </div>
    </header>
  );
};

export default Header;
