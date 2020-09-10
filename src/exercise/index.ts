import one from './1';
import two from './2';
import three from './3';

const exercises = [one, two, three];

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
