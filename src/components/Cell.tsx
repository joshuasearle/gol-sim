import React from 'react';

import classes from '../css/classes';

interface CellProps {
  alive: boolean;
  cellWidth: number;
  onOver: any;
  onClick: any;
}

const Cell: React.FC<CellProps> = ({ alive, cellWidth, onOver, onClick }) => {
  return (
    <td
      className={alive ? classes.alive : classes.dead}
      onMouseOver={onOver}
      onMouseDown={onClick}
      style={{
        height: cellWidth,
        width: cellWidth,
      }}
    ></td>
  );
};

export default Cell;
