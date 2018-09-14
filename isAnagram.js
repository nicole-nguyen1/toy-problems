function validAnagram(str1, str2) {
  let counter1 = {};
  let counter2 = {};
  let isAnagram = false;

  if (str1.length !== str2.length) {
    console.log('false');
    return false;
  }

  if (str1 === '' && str2 === '') {
    console.log('true');
    return true;
  }

  frequencyMap(str1, counter1);
  frequencyMap(str2, counter2);

  for (let letter in counter1) {
    if (counter2[letter] && counter1[letter] === counter2[letter]) {
      isAnagram = true;
    } else {
      isAnagram = false;
    }
  }

  console.log(isAnagram);
  return isAnagram;
}

const frequencyMap = (str, map) => {
  for (let el of str) {
    if (!map[el]) {
      map[el] = 1;
    } else {
      map[el]++;
    }
  }

  return map;
};

module.exports = validAnagram;