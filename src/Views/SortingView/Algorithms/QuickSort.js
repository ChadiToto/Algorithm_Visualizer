/* 3rd Party Libraries */
import _ from "lodash";

/**
 * This function Triggers QuickSort Algorithm
 *
 * @param {array} array to be sorted
 * @returns {array} of animations to be displayed on visualizer
 */
export default function triggerFunction(array) {
  let animations = [];

  if (!isSorted(array)) quickSort(array, 0, array.length - 1, animations);
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

function quickSort(array, left, right, animations) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right, animations);
    quickSort(array, left, partitionIndex - 1, animations);
    quickSort(array, partitionIndex + 1, right, animations);
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
function partition(array, pivot, left, right, animations) {
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

function isSorted(array) {
  let sorted = [...array];
  sorted = sorted.sort((a, b) => {
    return b - a;
  });
  console.log(_.isEqual(array, sorted));
  return _.isEqual(array, sorted);
}
