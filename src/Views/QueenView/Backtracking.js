const N = 4;
let ld = new Array(30);
let rd = new Array(30);
let cl = new Array(30);

function SolveNQUtil(board, col) {
  /*Best case : All queens are placed*/
  if (col >= N) return true;

  for (let i = 0; i < N; i++) {
    if (ld[i - col + N - 1] !== 1 && rd[i + col] !== 1 && cl[i] !== 1) {
      board[i][col] = 1;
      ld[i - col + N - 1] = rd[i + col] = cl[i] = 1;
      if (SolveNQUtil(board, col + 1)) return true;

      board[i][col] = 0; // Backtrack
      ld[i - col + N - 1] = rd[i + col] = cl[i] = 0;
    }
  }
}
