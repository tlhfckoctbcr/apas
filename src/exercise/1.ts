import util from '../util';

export default {
  description() {
    return `
      Given an array of integers, return indices of the two numbers such that they add up to a specific target.
      You may assume that each input would have exactly one solution, and you may not use the same element twice.
      
      Example:
      
      Given nums = [2, 7, 11, 15], target = 9,
      Because nums[0] + nums[1] = 2 + 7 = 9,
      return [0, 1]
    `;
  },
  solution() {
    const dataset = [2, 7, 11, 15];
    const target = 9;

    function filterGreaterThanValues(dataset: number[], target: number) {
      return dataset.filter((item: number) => {
        return item <= target;
      });
    }

    const filteredDataset = filterGreaterThanValues(dataset, target);

    for (let i = 0; i < filteredDataset.length; i += 1) {
      const compliment = target - filteredDataset[i];
      const solution = util.contains(dataset, compliment);

      if (solution) {
        console.log(`Success! Two numbers from this array will equal ${target}.`);
        break;
      }
    }
  }
}
