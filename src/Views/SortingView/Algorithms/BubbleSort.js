import isSorted from "./isSorted";

/**
 *BubbleSort Algorithm
 * How does it work? https://www.youtube.com/watch?v=xli_FI7CuzA
 *
 * @param {array} array to be sorted
 * @returns {object} of animations to be displayed on vizualizer
 * and the time it took for the function to finish
 */

export default function bubbleSort(array) {
  var timer_start = performance.now();
  var animations = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (isSorted(array)) break;
    for (let j = 0; j < length - 1; j++) {
      var animation = {};
      animation.comparaison = [j, j + 1];
      if (array[j] < array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        animation.swap = [j, j + 1];
      }
      animations.push(animation);
    }
  }
  var timer_end = performance.now();
  var time = timer_end - timer_start;
  return { animations, time };
}
