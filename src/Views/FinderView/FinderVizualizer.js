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
import { ScatterplotLayer, LineLayer } from "@deck.gl/layers";

/* Layer data  */
import points from "./data/point_data";
import paths from "./data/path";

/* Graph DS */
import graph from "./Graph";

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

  const point_layer = new ScatterplotLayer({
    id: "scatterplot-layer",
    data: points,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 10,
    radiusMinPixels: 5,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getPosition: (d) => d.coordinates,
    getRadius: (d) => Math.sqrt(d.exits),
    getFillColor: (d) => {
      if (d.start) return [35, 206, 250];
      else if (d.end) return [50, 205, 50];
      else return [220, 20, 60];
    },
    getLineColor: (d) => [255, 255, 255],
    onHover: ({ object, x, y }) => {
      //const tooltip = `${object.name}\n${object.address}`;
      /* Update tooltip
         http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
      */
    },
  });

  const line_layer = new LineLayer({
    id: "line-layer",
    data: paths,
    pickable: true,
    getWidth: 0.5,
    getSourcePosition: (d) => d.from.coordinates,
    getTargetPosition: (d) => d.to.coordinates,
    getColor: (d) => [105, 105, 105],
    onHover: ({ object, x, y }) => {
      //const tooltip = `${object.from.name} to ${object.to.name}`;
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

  console.log(graph);

  return (
    <Grid item direction="column" container style={{ padding: 0 }}>
      {/* Vizualizer Part */}
      <Grid container style={{ marginBottom: 0 }}>
        <Grid item xs={12}>
          <DeckGL
            initialViewState={initialViewState}
            controller={true}
            style={{ position: "relative", height: 505 }}
            layers={[point_layer, line_layer]}
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
