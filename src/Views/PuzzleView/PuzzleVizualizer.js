/* React Main Features */
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

/* 3rd Party Components */
import { Grid, Typography } from "@material-ui/core";

/* Helper Functions */
import { generateMatrix, isSolvable } from "./helperFunctions";

/* Custom Components */
import Player from "../../Components/Player";

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

  useEffect(() => {
    resetPuzzle();
  }, []);

  /**
   * This function intialize a solvable Puzzle
   * @returns {array} a 2D array containing the starting puzzle value
   * @note NOT ALL PUZZLES ARE SOLVABLE
   */
  const resetPuzzle = () => {
    let puzzle_matrix = [];
    do {
      puzzle_matrix = generateMatrix();
    } while (!isSolvable(puzzle_matrix));
    setPuzzle(puzzle_matrix);
  };

  const setBoard = () => {
    return (
      <Grid container direction="column">
        {puzzle.map((row) => {
          return (
            <Grid container>
              {row.map((n) => {
                return (
                  <Grid item xs={3} className={classes.row}>
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
   * Reverts back puzzle to initial state
   */
  const undo = () => {};

  /**
   * Displays animation on the Vizualizer
   *
   */
  const setAnimations = () => {};

  const Astar = [];

  return (
    <Grid item direction="column" container style={{ marginTop: "4vh" }}>
      {/* Vizualizer Part */}
      <Grid container xs={12} style={{ marginBottom: 58, marginTop: 20 }}>
        <Grid item xs={2} sm={4} />
        <Grid item sm={5} xs={10} style={{}}>
          {setBoard()}
        </Grid>
      </Grid>

      {/* Player Part */}
      <Player options={Astar} reset={resetPuzzle}></Player>
    </Grid>
  );
};

export default PuzzleVizualizer;
