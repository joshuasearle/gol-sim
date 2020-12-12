const createRandom2dArray = (width: number, height: number, chance: number) => {
  let arr = [];
  for (let i = 0; i < height; i++) {
    let subArr = [];
    for (let j = 0; j < width; j++) {
      subArr.push(Math.random() < chance);
    }
    arr.push(subArr);
  }
  return arr;
};

export default createRandom2dArray;
