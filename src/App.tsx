import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import createEmpty2dArray from './boardCreators/createEmpty';
import createRandom2dArray from './boardCreators/createRandom';
import nextBoard from './golLogic/golLogic';
import useMouseDown from './hooks/useMouseDownBody';
import useToggle from './hooks/useToggle';
import useBoard from './hooks/useBoard';

import gliderGun from './easter-eggs/glider-gun';
import pulsar from './easter-eggs/pulsar';

import {
  minTickRate,
  maxTickRate,
  initialTickRate,
  initialSpawnChance,
  boardWidth,
  boardHeight,
} from './constants';

const App: React.FC = () => {
  const [currentTickRate, setCurrentTickRate] = useState(initialTickRate);
  // Initially, the simulation is not running
  const [running, toggleRunning] = useToggle(false);
  const [currentSpawnChance, setCurrentSpawnChance] = useState(
    initialSpawnChance
  );
  const [board, resetBoard, randomiseBoard, setNextBoard, setBoard] = useBoard(
    boardWidth,
    boardHeight,
    currentSpawnChance
  );
  const mouseDownBody = useMouseDown();

  // Main game loop
  useEffect(() => {
    if (running) {
      setTimeout(() => {
        setNextBoard();
      }, 600 / currentTickRate);
    }
  }, [running, board]);

  // TODO: Fix type
  const tickChangeHandler = (event: any) => {
    setCurrentTickRate(event.target.value);
  };

  // TODO: Fix type
  const spawnChanceChangeHandler = (event: any) => {
    setCurrentSpawnChance(event.target.value);
  };

  const cellMouseOverHandler = (i: number, j: number) => {
    if (running) return;
    if (!mouseDownBody) return;
    const boardCopy = [...board];
    boardCopy[i][j] = !boardCopy[i][j];
    setBoard(boardCopy);
  };

  const cellMouseClickHandler = (i: number, j: number) => {
    if (running) return;
    const boardCopy = [...board];
    boardCopy[i][j] = !boardCopy[i][j];
    setBoard(boardCopy);
  };

  return (
    <>
      <Header
        tClickHandler={() => setBoard(pulsar)}
        oClickHandler={() => setBoard(gliderGun)}
        minTickRate={minTickRate}
        maxTickRate={maxTickRate}
        currentTickRate={currentTickRate}
        tickChangeHandler={tickChangeHandler}
        startStopClickHandler={toggleRunning}
        running={running}
        randomiseClickHandler={randomiseBoard}
        currentSpawnChance={currentSpawnChance}
        spawnChanceChangeHandler={spawnChanceChangeHandler}
        resetHandler={resetBoard}
      />
      <Body
        board={board}
        cellMouseOverHandler={cellMouseOverHandler}
        cellMouseClickHandler={cellMouseClickHandler}
      />
      <Footer />
    </>
  );
};

export default App;
