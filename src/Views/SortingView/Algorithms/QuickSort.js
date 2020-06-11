var animations = [];

/**
 * This function Triggers QuickSort Algorithm
 *
 * @param {array} array to be sorted
 * @returns {array} of animations to be displayed on visualizer
 */
export default function triggerFunction(array) {
  quickSort(array, 0, array.length - 1);
  return animations;
}

/**
 *ALL of the below is associated with the QuickSort Algorithm
 * How does quickSort work ? https://www.youtube.com/watch?v=Hoixgm4-P4M
 *
 * @param {array} array to be sorted
 * @param {Number} left start Index
 * @param {Number} right end Index
 * @returns {array} sorted array
 */

function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

/**
 * Partitioning HelperFunction for the QuickSort Algorithm
 *
 * @param {*} array
 * @param {*} pivot QuickSort pivot index
 * @param {*} left start Index
 * @param {*} right end Index
 */
function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    let animation = {};
    animation.comparaison = [i, pivot];
    if (array[i] > pivotValue) {
      [array[i], array[partitionIndex]] = [array[partitionIndex], array[i]];
      animation.swap = [i, partitionIndex];
      partitionIndex++;
    }
    animations.push(animation);
  }
  let animation = {};
  animation.comparaison = [right, partitionIndex];
  [array[right], array[partitionIndex]] = [array[partitionIndex], array[right]];
  animation.swap = [right, partitionIndex];
  animations.push(animation);
  return partitionIndex;
}
