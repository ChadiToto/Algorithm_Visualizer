/**
 *InsertionSort algorithm
 *How does it work ? https://www.youtube.com/watch?v=JU767SDMDvA
 *
 * @param {array} array
 * @returns {object} of animations to be displayed on vizualizer
 * and the time it took for the function to finish
 */

export default function insertionSort(array) {
  var timer_start = performance.now();
  let animations = [];
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let key_index = i;
    let j = i - 1;
    while (j >= 0 && array[j] < key) {
      let animation = {};
      animation.comparaison = [j, key_index];
      animation.swap = [j, key_index];
      [array[j], array[key_index]] = [array[key_index], array[j]];
      key_index = j;
      key = array[key_index];
      j--;
      animations.push(animation);
    }
  }
  var timer_end = performance.now();
  var time = timer_end - timer_start;
  return { animations, time };
}
