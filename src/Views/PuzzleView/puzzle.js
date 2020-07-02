/*This is the solved puzzle end goal */
const target = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 0],
];

/**
 * @class - Representing the Puzzle
 */
export default class Puzzle {
  /**
   * @constructor
   * @param {array} val - This the puzzle in the form of a 2D Array
   * @param {Puzzle} parent - This is the parent puzzle of our current puzzle node
   */
  constructor(val, parent) {
    this.val = val;
    this.parent = parent;
    this.children = [];
    this.F = this.getG() + this.getH();
  }

  /**
   * This method returns the g(n) parameter
   * @returns {number} the distance from the current node to root node
   */
  getG() {
    let g = 0;
    let current = this;
    while (current.parent !== null) {
      current = current.parent;
      g++;
    }
    return g;
  }

  /**
   * This method returns the h(n) parameter
   * @returns {number} the number of misplaced tiles by comparing current state and goal state
   */
  getH() {
    let h = 0;
    for (let i = 0; i < this.val.length; i++) {
      for (let j = 0; j < this.val.length; j++) {
        if (this.val[i][j] !== target[i][j]) h++;
      }
    }
    return h;
  }

  /**
   * This method looks up the "zero" tile position
   * @returns {array} containing the (x,y) coordinates of the "zero" tile
   */
  getZeroPos() {
    for (let i = 0; i < this.val.length; i++) {
      for (let j = 0; j < this.val[i].length; j++) {
        if (this.val[i][j] === 0) return [i, j];
      }
    }
  }

  /**
   * This method returns the allowed mouvements we're allowed to make
   * @returns {object} containing the available mouvements in format "up,down,left,right"
   * @note ONLY allowed mouvements will be in the object
   */
  getAvailablePlacements() {
    let [x, y] = this.getZeroPos();
    let obj = {};

    //Down
    if (x + 1 < 3) obj["down"] = x + 1;

    //Up
    if (x - 1 >= 0) obj["up"] = x - 1;

    //Left
    if (y - 1 >= 0) obj["left"] = y - 1;

    //Right
    if (y + 1 < 3) obj["right"] = y + 1;

    return obj;
  }

  /**
   *This method generates children of the current states depending on the allowed mouvement
   *the current state can make
   */
  setChildren() {
    let available = this.getAvailablePlacements();
    let [i, j] = this.getZeroPos();

    // MOVE DOWN
    if (available.hasOwnProperty("down")) {
      let swap = available["down"];
      let child = clone2D(this.val);
      [child[i][j], child[swap][j]] = [child[swap][j], child[i][j]];
      let childPuzzle = new Puzzle(child, this);
      this.children.push(childPuzzle);
    }

    // MOVE UP
    if (available.hasOwnProperty("up")) {
      let swap = available["up"];
      let child = clone2D(this.val);
      [child[i][j], child[swap][j]] = [child[swap][j], child[i][j]];
      let childPuzzle = new Puzzle(child, this);
      this.children.push(childPuzzle);
    }

    // MOVE LEFT
    if (available.hasOwnProperty("left")) {
      let swap = available["left"];
      let child = clone2D(this.val);
      [child[i][j], child[i][swap]] = [child[i][swap], child[i][j]];
      let childPuzzle = new Puzzle(child, this);
      this.children.push(childPuzzle);
    }

    // MOVE RIGHT
    if (available.hasOwnProperty("right")) {
      let swap = available["right"];
      let child = clone2D(this.val);
      [child[i][j], child[i][swap]] = [child[i][swap], child[i][j]];
      let childPuzzle = new Puzzle(child, this);
      this.children.push(childPuzzle);
    }
  }

  /**
   * This method is used for solving the puzzle using the A* Algorithm
   * @todo GENERATE PATH
   */
  Astar() {
    let queue = []; // PRIORITY QUEUE
    queue.push(this);
    while (queue.length !== 0) {
      let current = queue.shift();
      current.printPuzzle();
      console.log(" ");
      if (current.getH() !== 0) {
        current.setChildren();
        for (let i = 0; i < current.children.length; i++) {
          queue.push(current.children[i]);
        }
        queue.sort((a, b) => a.F - b.F);
      } else {
        break;
      }
    }
  }
}

/**
 * This function clones a 2D array
 * @note We can not use the spread operator for 2D arrays as it only copy the first level
 * @param {array} a - The cloned 2D array
 */
function clone2D(a) {
  return a.map((o) => [...o]);
}
