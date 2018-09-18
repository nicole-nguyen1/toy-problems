function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);

  let toys = [];
  let sum = 0;

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];

    if (sum <= k) {
      toys.push(prices[i]);
    }
  }

  return toys.length;
}