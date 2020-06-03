import React from "react";
import "fontsource-roboto";
import { Grid } from "@material-ui/core";

import Header from "../../Components/Header";

import Home from "../Main/Home";

function App() {
  return (
    <Grid container direction="column" spacing={6}>
      <Grid item xs={12}>
        <Header></Header>
      </Grid>

      <Grid item direction="column" spacing={5} container>
        <Home></Home>
      </Grid>
    </Grid>
  );
}

export default App;
