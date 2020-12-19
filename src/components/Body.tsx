import React, { useEffect, useState } from 'react';
import classes from '../css/classes';

import Cell from './Cell';
import useWindow from '../hooks/useWindow';

interface BodyProps {
  board: boolean[][];
  cellMouseOverHandler: any;
  cellMouseClickHandler: any;
}

const Body: React.FC<BodyProps> = ({
  board,
  cellMouseOverHandler,
  cellMouseClickHandler,
}) => {
  const windowWidth = useWindow();
  const cellWidth = windowWidth / board[0].length;

  return (
    <table className={classes.board} cellSpacing='0' cellPadding='0'>
      {board.map((row, i) => (
        <tr>
          {row.map((cell, j) => (
            <Cell
              onClick={() => cellMouseClickHandler(i, j)}
              onOver={() => cellMouseOverHandler(i, j)}
              alive={cell}
              cellWidth={cellWidth}
            />
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Body;
