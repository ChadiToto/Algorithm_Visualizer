import isSorted from "./isSorted";

/**
 *BubbleSort Algorithm
 * How does it work? https://www.youtube.com/watch?v=xli_FI7CuzA
 *
 * @param {array} array to be sorted
 * @returns {array} of animations to be displayed on vizualizer
 */

export default function bubbleSort(array) {
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
  return animations;
}
