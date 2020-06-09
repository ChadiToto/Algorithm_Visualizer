import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import CachedIcon from "@material-ui/icons/Cached";

import { Grid, Paper, Typography, IconButton, Button } from "@material-ui/core";

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
});

const Player = (props) => {
  console.log(props.sort);
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Paper className={classes.player}>
          <Typography className={classes.typo} style={{ paddingTop: "2px" }}>
            <IconButton onClick={props.reset}>
              <CachedIcon className={classes.reset}></CachedIcon>
            </IconButton>
            <IconButton style={{ padding: "6px" }}>
              <PlayCircleFilledIcon className={classes.play} />
            </IconButton>
            <IconButton className={classes.reset}>x2</IconButton>
          </Typography>
          <div>
            {props.sort.map((item) => {
              return (
                <Button className={classes.item} onClick={item.method}>
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
