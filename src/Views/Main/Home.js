/* React */
import React from "react";
import { Link } from "react-router-dom";

/* 3RD Party Components */
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

/* Custom Components */
import Card from "../../Components/Card";

/* Data */
import data from "./data";

const useStyles = makeStyles({
  root: {
    marginTop: "5vh",
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
                  md={Math.floor((12 - 1) / row.children.length)}
                >
                  <Link to={child.link} style={{ textDecoration: "none" }}>
                    <Card child={child}></Card>
                  </Link>
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
