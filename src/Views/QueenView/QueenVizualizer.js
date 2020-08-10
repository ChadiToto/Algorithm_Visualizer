/* React Main Features */
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

/* 3rd Party Components */
import { Grid, Typography } from "@material-ui/core";

/* Custom Components */
import Player from "../../Components/Player";

/* BackTracking */
import SolveNQ from "./Backtracking";

/* HelperFunction */
import clearAnimations from "../../Utils/clearAnim";

const PRIMARY_TILE = "black";
const SECONDARY_TILE = "white";

const useStyles = makeStyles({
  tile: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  impair: {
    backgroundColor: `${PRIMARY_TILE}`,
  },
  pair: {
    backgroundColor: `${SECONDARY_TILE}`,
  },
});

const QueenVizualizer = () => {
  const classes = useStyles();
  const [board, setBoard] = useState([]);

  useEffect(() => {
    resetBoard();
    return () => {
      clearAnimations();
    };
  }, []);

  /**
   * This function resets the chessboard
   */
  const resetBoard = () => {
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
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
        {[...Array(8)].map((x, i) => {
          return (
            <Grid container>
              {[...Array(8)].map((y, j) => {
                return (
                  <Grid
                    item
                    xs={1}
                    className={`${
                      (j + i) % 2 === 0 ? classes.pair : classes.impair
                    } ${classes.tile}`}
                  >
                    <Typography align="center">
                      <img
                        alt="chess_piece"
                        id={i + "" + j}
                        src={process.env.PUBLIC_URL + "images/queen.svg"}
                        width="45%"
                        style={{ visibility: "hidden", padding: 0, margin: 0 }}
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
    resetBoard();
    clearAnimations();
    let animations = SolveNQ(board);
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        let tile = document.getElementById(
          animations[i][0] + "" + animations[i][1]
        );
        if (tile.style.visibility === "hidden") tile.style.visibility = "";
        else tile.style.visibility = "hidden";
      }, i * 300);
    }
  };

  /**
   * This functions returns the number of iterations of given algorithm
   * Required in order to find a solution
   */
  const getIterations = () => {
    // TODO FIX
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ];
    return SolveNQ(board).length;
  };

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

  const iterations = {
    title: "Finding a solution took : ",
    algorithms: [
      {
        title: "Backtracking ",
        time: getIterations(),
      },
    ],
  };

  return (
    <Grid item direction="column" container style={{ marginTop: "4vh" }}>
      {/* Vizualizer Part */}
      <Grid container style={{ marginBottom: 40, marginTop: 20 }}>
        <Grid item xs={0} md={3} />
        <Grid item xs={12} sm={10} md={8} style={{ marginLeft: 30 }}>
          {displayBoard()}
        </Grid>
      </Grid>

      {/* Player Part */}
      <Player
        options={algorithms}
        reset={resetBoard}
        undo={resetBoard}
        time={iterations}
      ></Player>
    </Grid>
  );
};

export default QueenVizualizer;
