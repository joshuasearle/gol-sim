import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import useToggle from './hooks/useToggle';
// import useBoard from './hooks/useBoard';

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
import createEmpty2dArray from './boardCreators/createEmpty';
import nextBoard from './golLogic/golLogic';
import createRandom2dArray from './boardCreators/createRandom';

const App: React.FC = () => {
  const [currentTickRate, setCurrentTickRate] = useState(initialTickRate);
  // Initially, the simulation is not running
  const [running, toggleRunning] = useToggle(false);
  const [currentSpawnChance, setCurrentSpawnChance] = useState(
    initialSpawnChance
  );
  const [board, setBoard] = useState(
    createEmpty2dArray(boardWidth, boardHeight)
  );

  // Main game loop
  useEffect(() => {
    if (running) {
      setTimeout(() => {
        setBoard(nextBoard(board));
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

  const cellMouseClickHandler = (i: number, j: number) => {
    if (running) return;
    console.log(i, j);

    const boardCopy = [...board];
    boardCopy[i][j] = !boardCopy[i][j];
    setBoard(boardCopy);
  };

  return (
    <>
      <Header
        tClickHandler={() => (!running ? setBoard(pulsar) : null)}
        oClickHandler={() => (!running ? setBoard(gliderGun) : null)}
        minTickRate={minTickRate}
        maxTickRate={maxTickRate}
        currentTickRate={currentTickRate}
        tickChangeHandler={tickChangeHandler}
        startStopClickHandler={toggleRunning}
        running={running}
        randomiseClickHandler={setBoard(
          createRandom2dArray(boardWidth, boardHeight, currentSpawnChance)
        )}
        currentSpawnChance={currentSpawnChance}
        spawnChanceChangeHandler={spawnChanceChangeHandler}
        resetHandler={setBoard(createEmpty2dArray(boardHeight, boardWidth))}
      />
      <Body board={board} cellMouseClickHandler={cellMouseClickHandler} />
      <Footer />
    </>
  );
};

export default App;
