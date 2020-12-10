import React from 'react';

import { deadColor, aliveColor } from '../../constants';

interface CellProps {
  alive: boolean;
  cellWidth: number;
  onClick: any;
}

const Cell: React.FC<CellProps> = ({ alive, cellWidth, onClick }) => {
  return (
    <td
      onMouseDown={onClick}
      style={{
        backgroundColor: alive ? aliveColor : deadColor,
        height: cellWidth,
        width: cellWidth,
      }}
    ></td>
  );
};

export default Cell;
