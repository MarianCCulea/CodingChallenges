/**
 * @param {number} x
 * @return {boolean}
 * 
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * Example:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 */

const isPalindrome=(x)=> {
        const strNum = x.toString();
        // Get the length of the string
        const len = strNum.length;
        // Loop through the string from both ends, comparing the characters
        for (let i = 0; i < len / 2; i++) {
          if (strNum[i] !== strNum[len - 1 - i]) {
            console.log(i);
            return false;
          }
        }
        return true;
};

module.exports={isPalindrome};
