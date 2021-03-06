/* React Main Features */
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

/* 3rd Party Components */
import { Grid, Typography } from "@material-ui/core";

/* Custom Components */
import Player from "../../Components/Player";

/* Puzzle Class */
import Puzzle from "./puzzle";

/* Premade Puzzles */
import puzzledata from "./data";

// Helper Function
import clearAnimations from "../../Utils/clearAnim";

const { promisify } = require("util");

/* Constants*/
const PRIMARY = "red";
const SECONDARY = "#eb0839";

const useStyles = makeStyles({
  row: {
    backgroundColor: "#eb0839",
    paddingTop: 40,
    paddingBottom: 40,
    marginRight: "2px",
    marginTop: "2px",
  },
  number: {
    color: "white",
    fontSize: "35px",
  },
});

const PuzzleVizualizer = () => {
  const classes = useStyles();
  const [puzzle, setPuzzle] = useState([]);
  const [oldPuzzle, setOldPuzzle] = useState([]);

  useEffect(() => {
    resetPuzzle();
    return () => {
      clearAnimations();
    };
  }, []);

  /**
   * This function intialize a solvable Puzzle
   * @returns {array} a 2D array containing the starting puzzle value
   * @note NOT ALL PUZZLES ARE SOLVABLE
   */
  const resetPuzzle = () => {
    let n = Math.floor(Math.random() * (puzzledata.length - 1));
    setPuzzle([]);
    // Refresh Effect
    setTimeout(() => {
      setPuzzle(puzzledata[n]);
      setOldPuzzle(puzzledata[n]);
    }, 0.1);
  };

  /**
   * Undo any Sorting to the array and reverts it back
   */
  const undo = () => {
    setPuzzle([]);
    // Refresh Effect
    setTimeout(() => {
      setPuzzle(oldPuzzle);
    }, 1);
  };

  /**
   * This function displays a board on the visualizer
   */
  const setBoard = () => {
    return (
      <Grid container direction="column">
        {puzzle.map((row, i) => {
          return (
            <Grid container key={"row-" + i}>
              {row.map((n, j) => {
                return (
                  <Grid
                    item
                    xs={3}
                    className={classes.row}
                    key={"col-" + j}
                    id={i + "" + j}
                  >
                    <Typography align="center" className={classes.number}>
                      {n}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    );
  };

  /**
   * The conversion of the setTimeOut method to async
   * is to set the new state of the puzzle after the animations are over.
   * Shuffled Puzzle => Solved Puzzle
   */
  const asyncsetTimeout = promisify(setTimeout);

  /**
   * Displays animation on the Vizualizer
   */
  const setAnimations = async () => {
    let puzzleInstance = new Puzzle(puzzle, null);
    let solution = puzzleInstance.Astar()[0];
    let animations = [];
    while (solution !== null) {
      animations.unshift(solution.getZeroPos());
      solution = solution.parent;
    }

    while (animations.length !== 1) {
      let tileOneKey = animations[0].join("");
      let tileTwoKey = animations[1].join("");

      let tileOne = document.getElementById(tileOneKey);
      let tileTwo = document.getElementById(tileTwoKey);

      for (let i = 0; i < 2; i++) {
        const color = i === 0 ? PRIMARY : SECONDARY;
        await asyncsetTimeout((resolve) => {
          tileOne.style.backgroundColor = color;
          tileTwo.style.backgroundColor = color;
          if (i !== 0) {
            [tileOne.innerHTML, tileTwo.innerHTML] = [
              tileTwo.innerHTML,
              tileOne.innerHTML,
            ];
          }
          resolve();
        }, 300);
      }
      animations.shift();
    }
    setPuzzle(puzzleInstance.target);
  };

  /**
   * This functions returns the number of iterations of A*
   * Required in order to find a solution
   */
  const getIterations = () => {
    let puzzleInstance = new Puzzle(oldPuzzle, null);
    return puzzleInstance.Astar()[1] + " Iterations";
  };

  /**
   * This function is responsible for triggering Animations
   * it is passed as props into the player component
   */
  const algorithm = [
    {
      title: "A*",
      method: () => setAnimations(),
    },
  ];

  const iterations = {
    title: "Finding an optimal Solution took : ",
    algorithms: [
      {
        title: "A*",
        time: getIterations(),
      },
    ],
  };

  return (
    <Grid item direction="column" container style={{ marginTop: "4vh" }}>
      {/* Vizualizer Part */}
      <Grid container style={{ marginBottom: 58, marginTop: 20 }}>
        <Grid item xs={2} sm={4} />
        <Grid item sm={5} xs={10} style={{}}>
          {setBoard()}
        </Grid>
      </Grid>

      {/* Player Part */}
      <Player
        options={algorithm}
        reset={resetPuzzle}
        time={iterations}
        undo={undo}
      ></Player>
    </Grid>
  );
};

export default PuzzleVizualizer;
