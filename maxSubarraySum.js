const maxSubarraySum = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;
  
  if (arr.length < n) {
    return null;
  }

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  // rather than recalculate, set the tempSum to be equal to the initial maxSum
  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    // subtract the previous number and add the next number while maintaining the sum
    tempSum = tempSum - arr[i-n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

module.exports = maxSubarraySum;