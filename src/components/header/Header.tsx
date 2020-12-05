import React, { useState } from 'react';

import TickRateSlider from '../tickRateSlider/TickRateSlider';
import StartStopButton from '../startStopButton/StartStopButton';
import RandomiseButton from '../randomiseButton/RandomiseButton';
import SpawnChanceSlider from '../spawnChanceSlider/SpawnChanceSlider';

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
    <>
      <label>Tick Rate</label>
      <TickRateSlider
        running={running}
        minTickRate={minTickRate}
        maxTickRate={maxTickRate}
        currentTickRate={currentTickRate}
        onChangeHandler={tickChangeHandler}
      />
    </>
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

  const spawnRateSlider = (
    <>
      <label>Spawn Rate</label>
      <SpawnChanceSlider
        currentSpawnChance={currentSpawnChance}
        onChangeHandler={spawnChanceChangeHandler}
      />
    </>
  );

  return (
    <header>
      <h1>{title}</h1>
      <div>
        {tickSlider}
        {startStopButton}
        {randomiseButton}
        {spawnRateSlider}
      </div>
    </header>
  );
};

export default Header;
