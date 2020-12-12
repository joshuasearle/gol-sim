import createEmpty from '../boardCreators/createEmpty';
import { boardWidth, boardHeight } from '../constants';

const gliderGun: boolean[][] = createEmpty(boardWidth, boardHeight);
const trues = [
  // Left sqaure
  { x: 8, y: 14 },
  { x: 8, y: 15 },
  { x: 9, y: 14 },
  { x: 9, y: 15 },
  // Three vert
  { x: 8, y: 24 },
  { x: 9, y: 24 },
  { x: 10, y: 24 },
  // Top arm
  { x: 7, y: 25 },
  { x: 6, y: 26 },
  { x: 6, y: 27 },
  // Bottom arm
  { x: 11, y: 25 },
  { x: 12, y: 26 },
  { x: 12, y: 27 },
  // Dot
  { x: 9, y: 28 },
  // Arrow
  { x: 7, y: 29 },
  { x: 8, y: 30 },
  { x: 9, y: 30 },
  { x: 10, y: 30 },
  { x: 11, y: 29 },
  { x: 9, y: 31 },
  // Rectangle
  { x: 8, y: 34 },
  { x: 7, y: 34 },
  { x: 6, y: 34 },
  { x: 8, y: 35 },
  { x: 7, y: 35 },
  { x: 6, y: 35 },
  // Top rect
  { x: 5, y: 36 },
  { x: 5, y: 38 },
  { x: 4, y: 38 },
  // Bottom rect
  { x: 9, y: 36 },
  { x: 9, y: 38 },
  { x: 10, y: 38 },
  // Right sqaure
  { x: 6, y: 48 },
  { x: 6, y: 49 },
  { x: 7, y: 48 },
  { x: 7, y: 49 },
];

trues.forEach(({ x, y }) => {
  gliderGun[x][y] = true;
});

export default gliderGun;
