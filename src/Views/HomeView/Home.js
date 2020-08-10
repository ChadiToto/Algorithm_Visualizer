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

const isExternal = (item) => {
  if (item.external)
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Card child={item}></Card>
      </a>
    );
  else
    return (
      <Link to={item.link} style={{ textDecoration: "none" }}>
        <Card child={item}></Card>
      </Link>
    );
};

const Home = () => {
  const classes = useStyles();

  React.useEffect(() => {}, []);

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
                  {isExternal(child)}
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
