var lengthOfLongestSubstring = function (str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (checkRepetition(s, i, j)) {
        res = Math.max(res, j - i + 1);
      }
    }
  }

  return res;
};

var checkRepetition = function (str, start, end) {
  let map1 = new Map();
  for (let i = start; i <= end; i++) {
    if (map1.has(str[i])) {
      return false;
    }
    map1.set(str[i], i);
  }

  return true;
};

module.exports = { checkRepetition, lengthOfLongestSubstring };
