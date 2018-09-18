const threeSumTwoPointer = (nums) => {
  let solutions = [];

  if (!nums || nums.length < 3) {
    return solutions;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] > nums[i-1]) {
      let j = i + 1;
      let k = nums.length - 1;

      while (j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        let triplet = [nums[i], nums[j], nums[k]];

        if (sum === 0) {
          solutions.push(triplet);
          j++;
          k--;

          //skip duplicates from k iterator
          while (nums[j + 1] === nums[j]) {
            j++;
          }

          // skip duplicates from j iterator
          while (nums[k - 1] === nums[k]) {
            k--;
          }
        } else if (sum < 0) { //increase lower number
          j++;
        } else { //decrease upper number
          k--;
        }
      } 
    }
  }

  return solutions;
}

module.exports = threeSumTwoPointer;