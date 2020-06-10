/* React Main Features */
import React from "react";
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

var method = null;

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
});

const Player = (props) => {
  const [active, setActive] = useState();

  const isActive = (id) => {
    return active === document.getElementById("option_" + id);
  };

  const setActiveMethod = (fct, id) => {
    let option = document.getElementById("option_" + id);
    method = fct;
    setActive(option);
  };

  const classes = useStyles();
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
            <IconButton style={{ padding: "6px" }} onClick={() => method()}>
              <PlayCircleFilledIcon className={classes.play} />
            </IconButton>
            <IconButton className={classes.reset}>x2</IconButton>
            <IconButton>
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
