import React from 'react';

import { deadColor, aliveColor } from '../../constants';

interface CellProps {
  alive: boolean;
  cellWidth: number;
}

const Cell: React.FC<CellProps> = ({ alive, cellWidth }) => {
  return (
    <td
      style={{
        backgroundColor: alive ? aliveColor : deadColor,
        height: cellWidth,
        width: cellWidth,
      }}
    ></td>
  );
};

export default Cell;
