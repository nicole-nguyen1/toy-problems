//time complexity 
//space complexity

const mergeSortedArrays = require('../helpers/mergeSortedArrays');

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let midpoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midpoint));
  let right = mergeSort(arr.slice(midpoint));

  return mergeSortedArrays(left, right);
}

module.exports = mergeSort;