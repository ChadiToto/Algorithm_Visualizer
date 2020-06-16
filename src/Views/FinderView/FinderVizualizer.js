/* React Main Features */
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

/* 3rd Party Components */
import { Grid, Paper } from "@material-ui/core";
import MapGL from "react-map-gl";
import DeckGL from "@deck.gl/react";

const TOKEN = process.env.REACT_APP_TOKEN;

const useStyles = makeStyles({
  container: {
    backgroundColor: "#EDEFED",
    width: "100%",
    minHeight: 450,
    marginBottom: 30,
  },
});

const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const FinderVizualizer = () => {
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: 450,
    latitude: 0,
    longitude: 0,
    zoom: 2,
  });

  const _onViewportChange = (viewport) =>
    setViewPort({ ...viewport, transitionDuration: 3000 });

  const classes = useStyles();

  return (
    <Grid item direction="column" container style={{ padding: 0 }}>
      {/* Vizualizer Part */}
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper className={classes.container}>
            <DeckGL
              initialViewState={initialViewState}
              controller={false}
              style={{ position: "relative", height: 450 }}
            >
              <MapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/mapbox/dark-v8"
                onViewportChange={_onViewportChange}
              ></MapGL>
            </DeckGL>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FinderVizualizer;
