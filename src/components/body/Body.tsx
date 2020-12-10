import React, { useEffect, useState } from 'react';
import classes from '../../css/classes';

import Cell from '../cell/Cell';

interface BodyProps {
  board: boolean[][];
  cellClickHandler: any;
}

const Body: React.FC<BodyProps> = ({ board, cellClickHandler }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowResizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', windowResizeHandler);
    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  });

  const cellWidth = windowWidth / board[0].length;

  return (
    <table className={classes.board} cellSpacing='0' cellPadding='0'>
      {board.map((row, i) => (
        <tr>
          {row.map((cell, j) => (
            <Cell
              onClick={() => cellClickHandler(i, j)}
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
