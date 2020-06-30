/* React */
import React from "react";
import { Link } from "react-router-dom";

/* 3RD Party Components */
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    backgroundColor: "#1E212B",
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
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Typography className={classes.typo}>Algorithm Visualizer</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
