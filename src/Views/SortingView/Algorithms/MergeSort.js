/**
 * ALL of the below is associated with the MergeSort Algorithm
 * Fun fact : This was the one i hated the most before i actually took the time and understood it
 * @param {array} array to be sorted
 * @returns {object} of animations to be displayed on vizualizer
 * and the time it took for the function to finish
 */

export default function mergeSort(array) {
  var timer_start = performance.now();
  let animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();

  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  var timer_end = performance.now();
  var time = timer_end - timer_start;
  return { animations, time };
}

/**
 * This Function takes care of the divide & conquer aspect of the algorithm
 * How does mergeSort Work? https://www.youtube.com/watch?v=4VqmGXwpLqc
 *
 * @param {*} mainArray
 * @param {*} startIdx
 * @param {*} endIdx
 * @param {*} auxiliaryArray
 * @param {*} animations
 */
function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    let animation = {};
    animation.comparaison = [i, j];
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animation.swap = [k, i];
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animation.swap = [k, j];
      mainArray[k++] = auxiliaryArray[j++];
    }
    animations.push(animation);
  }
  while (i <= middleIdx) {
    let animation = {};
    animation.comparaison = [i, i];
    animation.swap = [k, i];
    mainArray[k++] = auxiliaryArray[i++];
    animations.push(animation);
  }
  while (j <= endIdx) {
    let animation = {};
    animation.comparaison = [j, j];
    animation.swap = [k, j];
    animations.push(animation);

    mainArray[k++] = auxiliaryArray[j++];
  }
}
