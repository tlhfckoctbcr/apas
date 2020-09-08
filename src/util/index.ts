export default {
  contains(array: any[], value: any) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === value) return true;
    }
  }
}
