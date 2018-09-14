const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }

  console.log(i+1);
  return i+1;
};

module.exports = countUniqueValues;