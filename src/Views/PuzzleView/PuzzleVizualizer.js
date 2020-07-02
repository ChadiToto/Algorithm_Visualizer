/* React Main Features */
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

/* 3rd Party Components */
import { Grid, Paper } from "@material-ui/core";

/* Helper Functions */
import { generateMatrix, isSolvable } from "./helperFunctions";

/* Custom Components */
import Player from "../../Components/Player";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#EDEFED",
    width: "100%",
    minHeight: 450,
    marginBottom: 30,
  },
});

const PuzzleVizualizer = () => {
  const classes = useStyles();
  const [puzzle, setPuzzle] = useState([]);

  useEffect(() => {}, []);

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
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper className={classes.container}></Paper>
        </Grid>
      </Grid>

      {/* Player Part */}
      <Player options={Astar}></Player>
    </Grid>
  );
};

export default PuzzleVizualizer;
