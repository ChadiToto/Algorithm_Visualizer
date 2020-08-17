/* React Main Features */
import React, { useEffect } from "react";
import { useState } from "react";

/* Material UI Features */
import { makeStyles } from "@material-ui/core/styles";

/* Material UI Components */
import { Grid, Paper, Typography, IconButton, Button } from "@material-ui/core";

/* Material UI Icons */
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import CachedIcon from "@material-ui/icons/Cached";
import ReplayIcon from "@material-ui/icons/Replay";
import TimerIcon from "@material-ui/icons/Timer";

/* Data */
import helpData from "./data/playerData";

import { toast } from "react-toastify";

const useStyles = makeStyles({
  player: {
    textAlign: "center",
    backgroundColor: "#EDEFED",
    height: 103,
  },
  play: {
    fontSize: 50,
  },
  reset: {
    fontSize: 15,
  },
  typo: {
    fontSize: 12,
  },
  item: {
    fontSize: 10,
  },
  active: {
    fontWeight: "bold",
    fontSize: "70%",
  },
  timerTitle: {
    fontSize: 14,
    lineHeight: 2,
    fontWeight: "bold",
  },
  timerElements: {
    fontSize: 14,
    lineHeight: 1.5,
  },
});

const Player = (props) => {
  const [active, setActive] = useState();
  const [method, setMethod] = useState();
  const classes = useStyles();

  /**
   * This function is responsible for displaying animations on the vizualizer
   */
  const playAnimations = () => {
    if (method == null) {
      return toast.error("No method selected !");
    } else {
      method();
      setActive(null);
      setMethod(null);
    }
  };

  /**
   * This function displays information about the project
   */
  const help1 = () => {
    toast(
      <div style={{ padding: 10 }}>
        <Typography>
          - To start vizualizing pick an algorithm below the{" "}
          <PlayCircleFilledIcon className={classes.reset} /> button and play it
          by clicking the button.
        </Typography>
        <Typography style={{ marginTop: 10 }}>
          - Click here for the source code of this project.
        </Typography>
      </div>,
      {
        position: "top-left",
        autoClose: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    help2();
  };

  /**
   * This function explains the multiple features of the vizualizer
   */
  const help2 = () => {
    toast(
      <div style={{ padding: 10 }}>
        {helpData.map((child, index) => {
          return (
            <Typography key={index}>
              {React.createElement(child.component, {
                style: { fontSize: 15 },
              })}
              : {child.desc}
            </Typography>
          );
        })}
        <Typography>? : Displays this screen</Typography>
      </div>,
      {
        position: "top-left",
        autoClose: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  /**
   * Displays a toast containing The algorithms and their
   * runtime on the current vizualized element
   */
  const displayTime = () => {
    toast.info(
      <div>
        <div className={classes.timerTitle}>{props.time.title}</div>
        {props.time.algorithms.map((algo, index) => {
          return (
            <div className={classes.timerElements} key={index}>
              {algo.title} : {algo.time}
            </div>
          );
        })}
      </div>,
      {
        position: "top-right",
        autoClose: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  /**
   * Check if the item is active
   * This is used to set CSS for the active element on the list
   * of algorithms.
   *
   * @param {string} id
   * @returns {boolean}
   */
  const isActive = (id) => {
    return active === document.getElementById("option_" + id);
  };

  /**
   * Set the active element associated function to the "Play Button"
   *
   * @param {*} fct is the algorithm to be vizualized
   * @param {*} id is the active element's id
   */
  const setActiveMethod = (fct, id) => {
    let option = document.getElementById("option_" + id);
    setMethod(() => fct);
    setActive(option);
  };

  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Paper className={classes.player}>
          <Typography className={classes.typo} style={{ paddingTop: "2px" }}>
            <IconButton onClick={props.undo}>
              <ReplayIcon className={classes.reset}></ReplayIcon>
            </IconButton>
            <IconButton onClick={props.reset}>
              <CachedIcon className={classes.reset}></CachedIcon>
            </IconButton>
            <IconButton
              style={{ padding: "6px" }}
              onClick={() => playAnimations()}
            >
              <PlayCircleFilledIcon className={classes.play} />
            </IconButton>
            <IconButton className={classes.reset} onClick={() => help1()}>
              ?
            </IconButton>
            <IconButton onClick={() => displayTime()}>
              <TimerIcon className={classes.reset}></TimerIcon>
            </IconButton>
          </Typography>
          <div>
            {props.options.map((item, id) => {
              return (
                <Button
                  key={id}
                  id={"option_" + id}
                  className={isActive(id) ? classes.active : classes.item}
                  onClick={() => setActiveMethod(item.method, id)}
                >
                  {item.title}
                </Button>
              );
            })}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Player;
