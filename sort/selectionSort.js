//time complexity is O(n^2)
//space complexity is O(1) since we only have variables that take up very little space (aka not an array or object)

const swap = require('../helpers/swap');

const selectionSort = (arr) => {
  let indexOfMin;

  for (let i = 0; i < arr.length; i++) {
    indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (i !== indexOfMin) {
      swap(arr, i, indexOfMin);
    }
  }

  console.log(arr);
  return arr;
}

module.exports = selectionSort;