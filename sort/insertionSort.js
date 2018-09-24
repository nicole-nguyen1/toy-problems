//time complexity is O(n^2), but if nearly sorted, it is better
//it's good for sorting while streaming

const swap = require('../helpers/swap');

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentVal;
  }  

  console.log(arr);
  return arr;
}

module.exports = insertionSort;