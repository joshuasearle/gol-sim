import React from 'react';

import { deadColor, aliveColor } from '../../constants';

interface CellProps {
  alive: boolean;
  cellWidth: number;
  onOver: any;
  onClick: any;
}

const Cell: React.FC<CellProps> = ({ alive, cellWidth, onOver, onClick }) => {
  return (
    <td
      onMouseOver={onOver}
      onClick={onClick}
      style={{
        backgroundColor: alive ? aliveColor : deadColor,
        height: cellWidth,
        width: cellWidth,
      }}
    ></td>
  );
};

export default Cell;
