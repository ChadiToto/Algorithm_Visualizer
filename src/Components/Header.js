import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    backgroundColor: "#022B3A",
  },
  typo: {
    fontFamily: "Wallpoet",
    fontSize: 20,
    fontWeight: 400,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary" className={classes.root}>
      <Toolbar variant="dense">
        <Typography className={classes.typo}>Algorithm Visualizer</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
