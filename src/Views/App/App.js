import React from "react";
import "fontsource-roboto";
import { Grid } from "@material-ui/core";

import Header from "../../Components/Header";

//import Home from "../Main/Home";
import Vizualizer from "../VisualizerView/Visualizer";

function App() {
  return (
    <Grid container direction="column" spacing={6}>
      <Grid item xs={12}>
        <Header></Header>
      </Grid>

      <Vizualizer></Vizualizer>
    </Grid>
  );
}

export default App;
