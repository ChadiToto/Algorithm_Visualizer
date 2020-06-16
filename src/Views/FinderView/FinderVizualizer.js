/* React Main Features */
import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

/* 3rd Party Components */
import { Grid } from "@material-ui/core";

/* Map Components */
import MapGL from "react-map-gl";
import DeckGL from "@deck.gl/react";

/* Custom Components */
import Player from "../../Components/Player";
import { ScatterplotLayer } from "@deck.gl/layers";

/* Map Marker data */
import data from "./data";

/* MapBox Token */
const TOKEN = process.env.REACT_APP_TOKEN;

const useStyles = makeStyles({
  player: {
    marginTop: 5,
  },
});

/* TESTING PURPOSES */

/* Intialization Position */
const initialViewState = {
  longitude: 2.2935,
  latitude: 48.5324,
  zoom: 6.03,
  pitch: 0,
  bearing: 0,
};

const FinderVizualizer = () => {
  const classes = useStyles();
  const layer = new ScatterplotLayer({
    id: "scatterplot-layer",
    data,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 10,
    radiusMinPixels: 8,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getPosition: (d) => d.coordinates,
    getRadius: (d) => Math.sqrt(d.exits),
    getFillColor: (d) => [220, 20, 60],
    getLineColor: (d) => [0, 0, 0],
    onHover: ({ object, x, y }) => {
      const tooltip = `${object.name}\n${object.address}`;
      /* Update tooltip
         http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
      */
    },
  });

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 2,
  });

  /**
   * Changes view port when moving/zooming Map
   *
   * @param {*} viewport
   */
  const _onViewportChange = (viewport) => setViewPort({ ...viewport });

  /**
   * Associate Every Algorithm to its respective function
   * This is passed to child components as props
   *
   * @type {array} of objects
   */
  const pathMethods = [
    {
      title: "A*",
      method: () => {},
    },
    {
      title: "Bellman-Ford",
      method: () => {},
    },
    {
      title: "Dijkstra ",
      method: () => {},
    },
    {
      title: "Floyd–Warshall",
      method: () => {},
    },
    {
      title: "Longest Path",
      method: () => {},
    },
  ];

  return (
    <Grid item direction="column" container style={{ padding: 0 }}>
      {/* Vizualizer Part */}
      <Grid container style={{ marginBottom: 0 }}>
        <Grid item xs={12}>
          <DeckGL
            initialViewState={initialViewState}
            controller={true}
            style={{ position: "relative", height: 505 }}
            layers={layer}
          >
            <MapGL
              {...viewport}
              mapStyle="mapbox://styles/mapbox/light-v9"
              mapboxApiAccessToken={TOKEN}
              onViewportChange={_onViewportChange}
            ></MapGL>
          </DeckGL>
        </Grid>
      </Grid>
      <Player options={pathMethods} className={classes.player}></Player>
    </Grid>
  );
};

export default FinderVizualizer;
