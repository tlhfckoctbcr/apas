import one from './one';
import two from './two';

const exercises = [one, two];

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
