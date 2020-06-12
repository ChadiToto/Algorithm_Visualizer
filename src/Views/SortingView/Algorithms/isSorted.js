/* 3rd Party Libraries */
import _ from "lodash";

/**
 * Returns true if array is already Sorted
 * This is strictly to prevent useless animations on sorted arrays
 *
 * @param {array} array
 * @returns {boolean}
 */
export default function isSorted(array) {
  let sorted = [...array].sort((a, b) => {
    return b - a;
  });
  console.log(_.isEqual(array, sorted));
  return _.isEqual(array, sorted);
}
