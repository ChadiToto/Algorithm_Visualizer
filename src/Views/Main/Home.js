import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import Card from "../../Components/Card";

import data from "./data";

const useStyles = makeStyles({
  root: {
    marginLeft: "4.5vw",
  },
  typo: {
    textTransform: "uppercase",
    fontFamily: "Roboto",
    fontWeight: 500,
  },
  container: {
    marginTop: "3vh",
  },
});

const Home = () => {
  const classes = useStyles();
  const content = data.map((row) => {
    return (
      <Grid item xs={12} className={classes.root}>
        <Typography variant="h6" className={classes.typo}>
          {row.heading}
        </Typography>

        <Grid container spacing={2} className={classes.container}>
          {row.children.map((child) => {
            return (
              <>
                <Grid
                  item
                  xs={11}
                  sm={10}
                  md={Math.floor((12 - 1) / row.children.length)}
                >
                  <Card child={child}></Card>
                </Grid>
                <Grid item xs={1}></Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
    );
  });

  return content;
};

export default Home;
