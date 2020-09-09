export default {
  description() {
    return `
      You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
      
      You may assume the two numbers do not contain any leading zero, except the number 0 itself.
      
      Example:
      
      Input: [2, 4, 3] + [5, 6, 4]
      Output: [7, 0, 8]
      Explanation: 342 + 465 = 807
    `;
  },
  solution() {
    const input1 = [2, 4, 3];
    const input2 = [5, 6, 4];
    const output: number[] = [];
    let remainder = 0;

    for (let i = 0; i < input1.length; i += 1) {
      let value: number = input1[i] + input2[i] + remainder;
      if (value > 9) {
        value = value - 10;
        remainder = 1;
      } else {
        remainder = 0;
      }

      output.push(value);
    }

    console.log('Solution output: ', output);
  }
}
