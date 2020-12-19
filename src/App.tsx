import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import createEmpty2dArray from './boardCreators/createEmpty';
import createRandom2dArray from './boardCreators/createRandom';
import nextBoard from './golLogic/golLogic';
import useMouseDown from './hooks/useMouseDownBody';

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
  const [board, setBoard] = useState(
    createEmpty2dArray(boardWidth, boardHeight)
  );

  const [currentTickRate, setCurrentTickRate] = useState(initialTickRate);
  // Initially, the simulation is not running
  const [running, setRunning] = useState(false);
  const [currentSpawnChance, setCurrentSpawnChance] = useState(
    initialSpawnChance
  );
  const mouseDownBody = useMouseDown();

  useEffect(() => {
    if (running) {
      setTimeout(() => {
        const next: boolean[][] = nextBoard(board);
        setBoard(next);
      }, 600 / currentTickRate);
    }
  }, [running, board]);

  // TODO: Fix type
  const tickChangeHandler = (event: any) => {
    setCurrentTickRate(event.target.value);
  };

  const startStopClickHandler = () => {
    // Toggle running
    setRunning(!running);
  };

  const randomiseClickHandler = () => {
    setBoard(
      createRandom2dArray(boardWidth, boardHeight, currentSpawnChance / 100)
    );
  };

  // TODO: Fix type
  const spawnChanceChangeHandler = (event: any) => {
    setCurrentSpawnChance(event.target.value);
  };

  const resetHandler = () => {
    setBoard(createEmpty2dArray(boardWidth, boardHeight));
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
    console.log(i, j);

    const boardCopy = [...board];
    boardCopy[i][j] = !boardCopy[i][j];
    setBoard(boardCopy);
  };

  const oClickHandler = () => {
    if (running) return;
    setBoard(gliderGun);
  };

  const tClickHandler = () => {
    if (running) return;
    setBoard(pulsar);
  };

  return (
    <>
      <Header
        tClickHandler={tClickHandler}
        oClickHandler={oClickHandler}
        minTickRate={minTickRate}
        maxTickRate={maxTickRate}
        currentTickRate={currentTickRate}
        tickChangeHandler={tickChangeHandler}
        startStopClickHandler={startStopClickHandler}
        running={running}
        randomiseClickHandler={randomiseClickHandler}
        currentSpawnChance={currentSpawnChance}
        spawnChanceChangeHandler={spawnChanceChangeHandler}
        resetHandler={resetHandler}
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
