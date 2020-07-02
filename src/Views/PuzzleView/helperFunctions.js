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
    puzzle.push([]);
    for (let j = 0; j < 3; j++) {
      if (j === 2 && i === 2) {
        puzzle[i][j] = 0;
        break;
      }
      let n = Math.floor(Math.random() * (k - 1));
      puzzle[i][j] = nums[n];
      nums.splice(n, 1);
      k--;
    }
  }
  return puzzle;
}
