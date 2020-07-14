/* React Main Features */
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

/* 3rd Party Components */
import { Grid, Typography, Paper } from "@material-ui/core";

/* Custom Components */
import Player from "../../Components/Player";

/* BackTracking */
import SolveNQ from "./Backtracking";

const useStyles = makeStyles({
  tile: {
    paddingTop: 60,
    paddingBottom: 60,
  },
  impair: {
    backgroundColor: "black",
  },
  pair: {
    backgroundColor: "white",
  },
});

const QueenVizualizer = () => {
  const classes = useStyles();
  const [board, setBoard] = useState([]);

  useEffect(() => {
    resetBoard();
  }, []);

  /**
   * This function resets the chessboard
   */
  const resetBoard = () => {
    const board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let tile = document.getElementById(i + "" + j).style;
        tile.visibility = "hidden";
      }
    }
    setBoard(board);
  };

  /**
   * This function displays a board on the visualizer
   */
  const displayBoard = () => {
    return (
      <Grid container direction="column">
        {[...Array(4)].map((x, i) => {
          return (
            <Grid container>
              {[...Array(4)].map((y, j) => {
                return (
                  <Grid
                    item
                    xs={3}
                    className={`${
                      (j + i) % 2 === 0 ? classes.pair : classes.impair
                    } ${classes.tile}`}
                  >
                    <Typography align="center">
                      <img
                        id={i + "" + j}
                        src="https://icons.iconarchive.com/icons/aha-soft/chess/256/black-queen-2d-icon.png"
                        width="25%"
                        style={{ visibility: "hidden" }}
                      ></img>
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
   * Displays animation on the Vizualizer
   */
  const setAnimations = () => {
    let animations = SolveNQ(board);
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        let tile = document.getElementById(
          animations[i][0] + "" + animations[i][1]
        );
        if (tile.style.visibility === "hidden") tile.style.visibility = "";
        else tile.style.visibility = "hidden";
      }, i * 500);
    }
  };

  /**
   * This functions returns the number of iterations of given algorithm
   * Required in order to find a solution
   */
  const getIterations = () => {};

  /**
   * This array is responsible for triggering Animations
   * it is passed as props into the player component
   */
  const algorithms = [
    {
      title: "BackTracking",
      method: () => setAnimations(),
    },
  ];

  const iterations = {};

  return (
    <Grid item direction="column" container style={{ marginTop: "4vh" }}>
      {/* Vizualizer Part */}
      <Grid container style={{ marginBottom: 40, marginTop: 20 }}>
        <Grid item xs={2} sm={4} />
        <Grid item xs={10} sm={4} style={{ marginRight: 60 }}>
          <Paper>{displayBoard()}</Paper>
        </Grid>
      </Grid>

      {/* Player Part */}
      <Player
        options={algorithms}
        reset={resetBoard}
        undo={resetBoard}
      ></Player>
    </Grid>
  );
};

export default QueenVizualizer;
