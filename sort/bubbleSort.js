//big O time complexity is worst/avg O(n^2) but for nearly sorted, best case is O(n)
//space complexity is O(1) due to the temp variable and we aren't making another array

const swap = require('../helpers/swap');

const bubbleSort = (arr) => {
  //the reason we start backwards is because when the largest values
  //bubble up to the end of the array, we do not want to keep looping
  //through the entire array again, knowing that the values at the end
  //are already sorted

  //as for the inner loop, that is looping through a subarray of sorts, 
  //only the parts we definitely do not know are sorted yet

  //to optimize for nearly sorted arrays, if you make no swaps, break

  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  console.log(arr);
  return arr;
}

module.exports = bubbleSort;