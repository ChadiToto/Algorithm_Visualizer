const N = 4;

function isSafe(board, row, col) {
  for (let i = 0; i < col; i++) if (board[row][i] === 1) return false;
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
    if (board[i][j] === 1) return false;
  for (let i = row, j = col; i < N && j >= 0; i++, j--)
    if (board[i][j] === 1) return false;

  return true;
}

function SolveNQUtil(board, col, animations) {
  /*Best case : All queens are placed*/
  if (col >= N) return true;

  for (let i = 0; i < N; i++) {
    if (isSafe(board, i, col)) {
      animations.push([i, col]);
      board[i][col] = 1;
      if (SolveNQUtil(board, col + 1, animations)) return true;
      board[i][col] = 0; // Backtrack
      animations.push([i, col]);
    }
  }
  return false;
}

export default function SolveNQ(board) {
  let animations = [];
  if (SolveNQUtil(board, 0, animations) === false) {
    console.log("No solution !");
  }
  return animations;
}
