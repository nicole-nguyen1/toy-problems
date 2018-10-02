const threeSumTwoPointer = (nums) => {
  let solutions = [];

  if (nums.length < 3) {
    return solutions;
  }
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return solutions;
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        solutions.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (nums[j] === nums[j - 1]) {
          j++;
        }
        while (nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return solutions;
}

module.exports = threeSumTwoPointer;