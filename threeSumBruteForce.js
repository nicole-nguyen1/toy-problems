const threeSumBruteForce = (nums) => {
  nums.sort((a, b) => a - b);
  let solutions = [];

  //the crappy brute force solution with O(n^3) time complexity
  for (let i = 0; i < nums.length; i++) {
    // ignoring duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j-1]) {
        continue;
      }

      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) {
          continue;
        }

        let triplet = [nums[i], nums[j], nums[k]];
        let sum = triplet.reduce((total, acc) => total = total + acc);

        if (sum === 0) {
          solutions.push(triplet);
        }
      }
    }
  }

  return solutions;
}

module.exports = threeSumBruteForce;