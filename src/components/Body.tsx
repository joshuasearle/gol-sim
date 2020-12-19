import React, { useEffect, useState } from 'react';
import classes from '../css/classes';

import Cell from './Cell';
import useWindow from '../hooks/useWindow';

interface BodyProps {
  board: boolean[][];
  cellMouseClickHandler: any;
}

const Body: React.FC<BodyProps> = ({ board, cellMouseClickHandler }) => {
  const windowWidth = useWindow();
  const cellWidth = windowWidth / board[0].length;

  return (
    <table className={classes.board} cellSpacing='0' cellPadding='0'>
      {board.map((row, i) => (
        <tr>
          {row.map((cell, j) => (
            <Cell
              key={i * board[0].length + j}
              onClick={() => cellMouseClickHandler(i, j)}
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
