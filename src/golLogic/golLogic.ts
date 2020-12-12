const neighbourCount = (board: boolean[][], x: number, y: number) => {
  let neighbours = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j == 0) continue;
      try {
        neighbours += !!board[x + i][y + j] ? 1 : 0;
      } catch (e) {
        continue;
      }
    }
  }
  return neighbours;
};

const nextBoard = (board: boolean[][]): boolean[][] => {
  return board.map((row, x) => {
    return row.map((alive, y) => {
      const neibours = neighbourCount(board, x, y);
      if (alive && (neibours === 2 || neibours === 3)) return true;
      if (!alive && neibours === 3) return true;
      return false;
    });
  });
};

export default nextBoard;
