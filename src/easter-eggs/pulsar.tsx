import createEmpty from '../boardCreators/createEmpty';
import { boardWidth, boardHeight } from '../constants';

const pulsar: boolean[][] = createEmpty(boardWidth, boardHeight);
const trues = [
  // Top Left inner
  { x: 16, y: 49 },
  { x: 17, y: 49 },
  { x: 18, y: 49 },
  { x: 19, y: 48 },
  { x: 19, y: 47 },
  { x: 19, y: 46 },
  // Top Right inner
  { x: 16, y: 51 },
  { x: 17, y: 51 },
  { x: 18, y: 51 },
  { x: 19, y: 52 },
  { x: 19, y: 53 },
  { x: 19, y: 54 },
  // Bottom Left inner
  { x: 24, y: 49 },
  { x: 23, y: 49 },
  { x: 22, y: 49 },
  { x: 21, y: 48 },
  { x: 21, y: 47 },
  { x: 21, y: 46 },
  // Bottom Right inner
  { x: 24, y: 51 },
  { x: 23, y: 51 },
  { x: 22, y: 51 },
  { x: 21, y: 52 },
  { x: 21, y: 53 },
  { x: 21, y: 54 },
  // Top Left outer
  { x: 18, y: 44 },
  { x: 17, y: 44 },
  { x: 16, y: 44 },
  { x: 14, y: 46 },
  { x: 14, y: 47 },
  { x: 14, y: 48 },
  // Top Right outer
  { x: 18, y: 56 },
  { x: 17, y: 56 },
  { x: 16, y: 56 },
  { x: 14, y: 52 },
  { x: 14, y: 53 },
  { x: 14, y: 54 },
  // Bottom Left outer
  { x: 22, y: 44 },
  { x: 23, y: 44 },
  { x: 24, y: 44 },
  { x: 26, y: 46 },
  { x: 26, y: 47 },
  { x: 26, y: 48 },
  // Bottom Right outer
  { x: 22, y: 56 },
  { x: 23, y: 56 },
  { x: 24, y: 56 },
  { x: 26, y: 52 },
  { x: 26, y: 53 },
  { x: 26, y: 54 },
];

trues.forEach(({ x, y }) => {
  pulsar[x][y] = true;
});

export default pulsar;
