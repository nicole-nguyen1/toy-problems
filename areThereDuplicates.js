const areThereDuplicates = (...arguments) => {
  let arr = Array.from(arguments);

  let hash = {};

  for (let el of arr) {
    hash[el] ? true : hash[el] = 1;
  }

  return false;

  // return new Set(arguments).size !== arguments.length;

};

module.exports = areThereDuplicates;