import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import {
  title,
  minTickRate,
  maxTickRate,
  initialTickRate,
  initialSpawnChance,
  boardWidth,
  boardHeight,
} from './constants';

const createEmpty2dArray = (width: number, height: number) => {
  let arr = [];
  for (let i = 0; i < height; i++) {
    let subArr = [];
    for (let j = 0; j < width; j++) {
      subArr.push(false);
    }
    arr.push(subArr);
  }
  return arr;
};

const createRandom2dArray = (width: number, height: number, chance: number) => {
  let arr = [];
  for (let i = 0; i < height; i++) {
    let subArr = [];
    for (let j = 0; j < width; j++) {
      subArr.push(Math.random() < chance);
    }
    arr.push(subArr);
  }
  return arr;
};

const neighbourCount = (board: boolean[][], x: number, y: number) => {
  let neighbours = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j == 0) continue;
      try {
        neighbours += !!board[x + i][y + j] ? 1 : 0;
      } catch (e) {
        continue;
      }
    }
  }
  return neighbours;
};

const nextBoard = (board: boolean[][]): boolean[][] => {
  return board.map((row, x) => {
    return row.map((alive, y) => {
      const neibours = neighbourCount(board, x, y);
      if (alive && (neibours === 2 || neibours === 3)) return true;
      if (!alive && neibours === 3) return true;
      return false;
    });
  });
};

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

  const cellClickHandler = (i: number, j: number) => {
    if (running) return;
    const boardCopy = [...board];
    boardCopy[i][j] = !boardCopy[i][j];
    setBoard(boardCopy);
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
        currentSpawnChance={currentSpawnChance}
        spawnChanceChangeHandler={spawnChanceChangeHandler}
        resetHandler={resetHandler}
      />
      <Body board={board} cellClickHandler={cellClickHandler} />
      <Footer />
    </>
  );
};

export default App;
