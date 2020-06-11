/**
 * SelectionSort Algorithm
 * How does it work? https://www.youtube.com/watch?v=g-PGLbMth_g
 *
 * @param {array} array to be sorted
 * @returns {array} of animations to be displayed on vizualizer
 */
export default function selectionSort(array) {
  const length = array.length;
  var animations = [];
  for (let i = 0; i < length; i++) {
    let animation = {};
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] > array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      // This condition is only to prevent useless animations
      animation.comparaison = [min, i];
      animation.swap = [min, i];
    }
    array[i] = array[min];
    array[min] = temp;
    animations.push(animation);
  }
  return animations;
}
