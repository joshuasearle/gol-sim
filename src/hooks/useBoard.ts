import { useEffect, useState } from 'react';

import createEmpty2dArray from '../boardCreators/createEmpty';
import createRandom2dArray from '../boardCreators/createRandom';
import nextBoard from '../golLogic/golLogic';

const useBoard = (
  width: number,
  height: number,
  spawnChance: number
): [
  boolean[][],
  () => void,
  () => void,
  () => void,
  (_: boolean[][]) => void
] => {
  const [board, setBoard] = useState(createEmpty2dArray(width, height));

  const setRandom = () => {
    setBoard(createRandom2dArray(width, height, spawnChance / 100));
  };
  const reset = () => {
    setBoard(createEmpty2dArray(width, height));
  };
  const setNext = () => {
    setBoard(nextBoard(board));
  };

  return [board, reset, setRandom, setNext, setBoard];
};

export default useBoard;
