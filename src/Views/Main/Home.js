import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import Card from "../../Components/Card";

const useStyles = makeStyles({
  root: {
    marginLeft: "4.5vw",
  },
  typo: {
    fontFamily: "Ubuntu",
  },
  container: {
    marginTop: "3vh",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <Typography variant="h6" className={classes.typo}>
        Algorithms
      </Typography>

      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={11} sm={5}>
          <Card></Card>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={11} sm={5}>
          <Card></Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
