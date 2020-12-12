const createEmpty2dArray = (width: number, height: number) => {
  let arr = [];
  for (let i = 0; i < height; i++) {
    let subArr = [];
    for (let j = 0; j < width; j++) {
      subArr.push(false);
    }
    arr.push(subArr);
  }
  return arr;
};

export default createEmpty2dArray;
