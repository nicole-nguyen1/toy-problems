const helpers = require('../helpers/radixSortHelpers');
const getDigit = helpers.getDigit;
const mostDigits = helpers.mostDigits;

//define a function that accepts list of numbers
//figure out how many digits the largest number has
//loop from k=0 up to this largest num of digits
//for each iteration of the loop
  //create buckets for each digit
  //place each number in the corresponding bucket based on its kth digit
//replace existing array with values in our buckets, starting with 0 going up to 9
//return list at the end

const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }

    nums = [].concat(...buckets);
  }

  return nums;
}