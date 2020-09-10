export default {
  description() {
    return `
      Given a string, find the length of the longest substring without repeating characters.
      
      Example 1:
      Input: "abcabcbb"
      Output: 3
      Explanation: The answer is "abc", with the length of 3.
      
      Example 2:
      Input: "bbbbb"
      Output: 1
      Explanation: The answer is "b", with the length of 1.
      
      Example 3:
      Input: "pwwkew"
      Output: 3
      Explanation: The answer is "wke", with the length of 3.
      
      Note that the answer must be a substring. "pwke" is a subsequence and not a substring.
    `;
  },
  solution() {
    const input1 = "abcabcbb";
    const input2 = "bbbbb";
    const input3 = "pwwkew";

    function findLongestSubstringFromIndex(input: string, index: number = 0): number {
      let output = 0;
      let collectedLetters: string[] = [];

      for (let i = index; i < input.length; i++) {
        if (collectedLetters.indexOf(input[i]) < 0) {
          collectedLetters.push(input[i]);
        } else {
          output = collectedLetters.length > output ? collectedLetters.length : output;
          collectedLetters = [input[i]];
        }
      }

      return output;
    }

    console.log(findLongestSubstringFromIndex(input1));
    console.log(findLongestSubstringFromIndex(input2));
    console.log(findLongestSubstringFromIndex(input3));
  }
}
