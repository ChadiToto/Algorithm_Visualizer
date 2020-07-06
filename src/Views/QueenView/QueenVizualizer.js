/* React Main Features */
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

/* 3rd Party Components */
import { Grid, Typography } from "@material-ui/core";

/* Custom Components */
import Player from "../../Components/Player";

const useStyles = makeStyles({});

const QueenVizualizer = () => {
  const classes = useStyles();

  useEffect(() => {}, []);

  /**
   * This function resets the chessboard
   */
  const resetBoard = () => {};

  /**
   * This function displays a board on the visualizer
   */
  const setBoard = () => {
    return <div></div>;
  };

  /**
   * Reverts back Board to initial state
   */
  //const undo = () => {};

  /**
   * Displays animation on the Vizualizer
   */
  const setAnimations = () => {};

  /**
   * This functions returns the number of iterations of given algorithm
   * Required in order to find a solution
   */
  const getIterations = () => {};

  /**
   * This function is responsible for triggering Animations
   * it is passed as props into the player component
   */
  const algorithm = [];

  const iterations = {};

  return (
    <Grid item direction="column" container style={{ marginTop: "4vh" }}>
      {/* Vizualizer Part */}
      <Grid container style={{ marginBottom: 58, marginTop: 20 }}>
        <Grid item xs={2} sm={4} />
        <Grid item sm={5} xs={10}></Grid>
      </Grid>

      {/* Player Part */}
      <Player options={algorithm}></Player>
    </Grid>
  );
};

export default QueenVizualizer;
