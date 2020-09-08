import one from './one';

const exercises = [one];

export default {
  start() {
    console.log('Run all exercises.');
    exercises.forEach(exercise => {
      const { description, solution } = exercise;
      console.log('Description: ', description());
      solution();
    });
  }
}
