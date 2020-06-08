import React from "react";
import "fontsource-roboto";
import { Grid } from "@material-ui/core";

import Header from "../../Components/Header";

//import Home from "../Main/Home";
import SortingVizualizer from "../SortingView/SortingVizualizer";

function App() {
  return (
    <Grid container direction="column" spacing={6}>
      <Grid item xs={12}>
        <Header></Header>
      </Grid>

      <SortingVizualizer></SortingVizualizer>
    </Grid>
  );
}

export default App;
