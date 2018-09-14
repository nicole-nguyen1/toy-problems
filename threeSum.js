const threeSum = (nums) => {
  if (nums.length === 0) {
    return [];
  }

  if (nums.every(num => num === 0)) {
    if (nums.length < 3) {
      return [];
    } else {
      return [[0, 0, 0]];
    }
  }

  if (nums.length === 3 && (nums[0] + nums[1] + nums[2] === 0)) {
    return [nums];
  }

  nums.sort((a, b) => a - b);
  let hash = {};
  let solutions = {};

  for (let num of nums) {
    hash[num] ? hash[num]++ : hash[num] = 1;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      let k = 0 - nums[i] - nums[j];
      
    }
  }

  return Object.values(solutions);
}

// const binarySearch = (key, arr) => {
//   let min = 0;
//   let max = arr.length - 1;

//   while (min <= max) {
//     let mid = min + Math.floor((max - min) / 2);

//     if (arr[mid] < key) {
//       min = mid + 1;
//     } else if (arr[mid] > key) {
//       max = mid - 1;
//     } else {
//       return mid;
//     }
//   }

//   return null;
// }

module.exports = threeSum;