var lengthOfLongestSubstring = function (str) {
  let answer = 0;
  let map1 = new Map();
  let i = 0;
  for (let j = 0; j < str.length; j++) {
    if (map1.has(str[j])) {
      i = Math.max(map1.get(str[j]), i);
    }
    answer = Math.max(answer, j - i + 1);
    map1.set(str[j], j + 1);
  }
  return answer;
};

module.exports = { lengthOfLongestSubstring };
