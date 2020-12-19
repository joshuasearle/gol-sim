import React, { memo } from 'react';

import classes from '../css/classes';

interface CellProps {
  alive: boolean;
  cellWidth: number;
  onClick: any;
}

const Cell: React.FC<CellProps> = memo(
  ({ alive, cellWidth, onClick }) => {
    return (
      <td
        className={alive ? classes.alive : classes.dead}
        onMouseDown={onClick}
        style={{
          height: cellWidth,
          width: cellWidth,
        }}
      ></td>
    );
  },
  (prevProps, nextProps) => {
    const cellSame = prevProps.cellWidth === nextProps.cellWidth;
    const aliveSame = prevProps.alive === nextProps.alive;
    return aliveSame && cellSame;
  }
);

export default Cell;
