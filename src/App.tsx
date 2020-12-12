import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import createEmpty2dArray from './boardCreators/createEmpty';
import createRandom2dArray from './boardCreators/createRandom';
import nextBoard from './golLogic/golLogic';

import {
  title,
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
  console.log(board);

  const [currentTickRate, setCurrentTickRate] = useState(initialTickRate);
  // Initially, the simulation is not running
  const [running, setRunning] = useState(false);
  const [currentSpawnChance, setCurrentSpawnChance] = useState(
    initialSpawnChance
  );
  const [mouseDown, setMouseDown] = useState(false);

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
    console.log(event.target.value);
    setCurrentTickRate(event.target.value);
  };

  const startStopClickHandler = () => {
    console.log('start / stop pressed');
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
    console.log(event.target.value);
    setCurrentSpawnChance(event.target.value);
  };

  const resetHandler = () => {
    setBoard(createEmpty2dArray(boardWidth, boardHeight));
  };

  const cellMouseOverHandler = (i: number, j: number) => {
    if (running) return;
    if (!mouseDown) return;
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

  cellMouseClickHandler;

  useEffect(() => {
    const mouseDownHandler = (e: MouseEvent) => {
      const header = document.querySelector('.header');
      const rect = header.getBoundingClientRect();
      const mouseInHeader = rect.bottom >= e.clientY;
      if (!mouseInHeader) e.preventDefault();
      setMouseDown(true);
    };
    const mouseUpHandler = (e: MouseEvent) => {
      e.preventDefault();
      setMouseDown(false);
    };
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);
    return () => {
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
    };
  });

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
