/**
 * This function returns a random 2D array filled with unique values from 0-8
 * @returns {array} Generated Puzzle
 * @note The LAST element will always be a "0"
 */

export function generateMatrix() {
  let puzzle = [];
  let nums = [1, 2, 3, 4, 5, 6, 7, 8];

  let k = 8;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j && i === 2) puzzle[i][j] = 0;
      let n = Math.floor(Math.random() * (k + 1));
      puzzle[i][j] = nums[n];
      nums.splice(n, 1);
      k--;
    }
  }
  return puzzle;
}

/**
 * This function returns the solvability of the puzzle
 * @ressource https://datawookie.netlify.app/blog/2019/04/sliding-puzzle-solvable/
 * @param {array} puzzle
 * @returns {boolean} if the puzzle is solvable or not
 */
export function isSolvable(puzzle) {
  let invCount = getInvCount(puzzle);
  return invCount % 2 === 0;
}

/**
 * This function returns the inversion count of the puzzle
 * @ressource https://datawookie.netlify.app/blog/2019/04/sliding-puzzle-solvable/
 * @param {array} puzzle
 * @returns {number} inversion count
 */
function getInvCount(puzzle) {
  let puzzle1D = [].concat(...puzzle);
  let inv_count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (puzzle1D[i] > puzzle1D[j]) inv_count++;
    }
  }
  return inv_count;
}
