/* React Main Features */
import React from "react";
import { useState, useEffect } from "react";
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
import graph from "./WeightedGraph";

/* HelperFunction */
import clearAnimations from "../../Utils/clearAnim";

/* Constants */
const TOKEN = process.env.REACT_APP_TOKEN;
const START = [35, 206, 250];
const GOAL = [50, 205, 50];
const VISITED = [147, 112, 219];
const DEFAULT = [220, 20, 60];

const useStyles = makeStyles({
  player: {
    marginTop: 5,
  },
});

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
  const [pointLayer, setPointLayer] = useState();
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 2,
  });

  useEffect(() => {
    /* Points Initialization */
    modifyPointLayer([...points]);
    return () => {
      clearAnimations();
    };
  }, []);

  /**
   * This function modifies the point Layer State
   * @param {*} data - new data to be set on to the layer
   */
  function modifyPointLayer(data) {
    /**
     * This Layer is Responsible for setting points throughout the map
     */
    setPointLayer(
      new ScatterplotLayer({
        id: "scatterplot-layer",
        data,
        pickable: true,
        opacity: 0.8,
        filled: true,
        radiusScale: 10,
        radiusMinPixels: 5,
        radiusMaxPixels: 100,
        lineWidthMinPixels: 1,
        getPosition: (d) => d.coordinates,
        getRadius: (d) => Math.sqrt(d.exits),
        getFillColor: (d) => {
          if (d.start) return START;
          else if (d.end) return GOAL;
          else if (d.visited) return VISITED;
          else return DEFAULT;
        },
        getLineColor: (d) => [255, 255, 255],
      })
    );
  }

  /**
   * Changes view port when moving/zooming Map
   *
   * @param {*} viewport
   */
  const _onViewportChange = (viewport) => setViewPort({ ...viewport });

  const resetPath = () => {
    points[0].start = true;
    points[points.length - 1].end = true;
    for (let point of points) {
      point.visited = false;
    }
    modifyPointLayer(points);
  };

  /**
   * Displays the traversal Animation within the visualizer
   */
  const setAnimations = (path) => {
    //Before starting anything we need to reset the vizualizer and stop any ongoing animations
    resetPath();
    clearAnimations();

    /**
     * For each Vertex we visit we change the point data attribute visited to true
     * in order to mark the "point" in the displayed screen
     */
    for (let i = 0; i < path.length; i++) {
      for (let j = 0; j < points.length; j++) {
        if (points[j].name === path[i]) {
          setTimeout(() => {
            const new_points = [...points];
            new_points[j].visited = true;
            new_points[j].start = false;
            new_points[j].end = false;
            modifyPointLayer(new_points);
          }, i * 500);
          break;
        }
      }
    }
  };

  /**
   * Calls the setAnimations function to start the traversal
   * animation depending on the input of "algortihm".
   *
   * @param {number} algortihm The Algorithm to be animated
   */
  const setTraversal = (algorithm) => {
    switch (algorithm) {
      case 0:
        setAnimations(graph.Dijkstra("Paris", "Toulon"));
        break;
      case 1:
        setAnimations(graph.DFS("Paris", "Toulon"));
        break;
      case 2:
        setAnimations(graph.BFS("Paris"));
        break;
      default:
        console.error("Invalid Algorithm");
    }
  };

  /**
   * Associate Every Algorithm to its respective function
   * This is passed to child components as props
   *
   * @type {array} of objects
   */
  const pathMethods = [
    {
      title: "Dijkstra ",
      method: () => {
        setTraversal(0);
      },
    },
    {
      title: "Depth First Search",
      method: () => {
        setTraversal(1);
      },
    },
    {
      title: "Breadth First Search",
      method: () => setTraversal(2),
    },
  ];

  /**
   * This layer displays a line that connects cities within the map
   */
  const line_layer = new LineLayer({
    id: "line-layer",
    data: paths,
    pickable: true,
    getWidth: 0.5,
    getSourcePosition: (d) => d.from.coordinates,
    getTargetPosition: (d) => d.to.coordinates,
    getColor: (d) => [105, 105, 105],
  });

  return (
    <Grid item direction="column" container style={{ padding: 0 }}>
      {/* Vizualizer Part */}
      <Grid container style={{ marginBottom: 0 }}>
        <Grid item xs={12}>
          <DeckGL
            initialViewState={initialViewState}
            controller={true}
            style={{ position: "relative", height: 505 }}
            layers={[pointLayer, line_layer]}
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
      <Player
        options={pathMethods}
        reset={resetPath}
        className={classes.player}
        undo={resetPath}
      ></Player>
    </Grid>
  );
};

export default FinderVizualizer;
