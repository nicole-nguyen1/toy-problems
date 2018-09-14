const same = (arr1, arr2) => {
  console.time('time');
  let squares = {};
  let nums = {};
  let frequency = false;
  
  if (arr1.length !== arr2.length) {
    console.log('false');
    console.timeEnd('time');
    return false;
  }

  frequencyMap(arr1, nums);
  frequencyMap(arr2, squares);

  for (let el in nums) {
    let square = Math.pow(Number(el), 2);
    if (squares[square] && squares[square] === nums[el]) {
      frequency = true;
    } else {
      return false;
    }
  }

  console.log(frequency);
  console.timeEnd('time');
  return frequency;

}

const frequencyMap = (arr, map) => {
  for (let el of arr) {
    if (!map[el]) {
      map[el] = 1;
    } else {
      map[el]++;
    }
  }

  return map;
}

module.exports = same;