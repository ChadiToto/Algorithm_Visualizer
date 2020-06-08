import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";

import SortingVizualizer from "../../Components/Sorting/SortingViz";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#EDEFED",
    width: "100%",
    minHeight: 450,
    marginBottom: 30,
  },
});

const Vizualizer = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper className={classes.container}>
            <Grid container alignContent="center">
              <Grid item xs={12}>
                <SortingVizualizer></SortingVizualizer>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
};

export default Vizualizer;
