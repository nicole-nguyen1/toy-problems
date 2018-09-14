const findLongestSubstring = (s) => {
  let seen = {};
  let start = 0;
  let end = 0;
  let currLen = 0;
  let maxLen = 0;

  if (s === '') {
    return 0;
  }

  while (end < s.length) {
    if (currLen === 0 || !seen[s[end]]) {
      currLen++;
      seen[s[end]] = true;
      end++;

      if (currLen > maxLen) {
        maxLen = currLen;
      }
    } else if (seen[s[end]]) {
      currLen--;
      seen[s[start]] = false;
      start++;
    }
  }

  return maxLen;
};

module.exports = findLongestSubstring;