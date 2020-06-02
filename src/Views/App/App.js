import React from "react";
import "fontsource-roboto";
import { Grid } from "@material-ui/core";
import Header from "../../Components/Header/Header";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header></Header>
      </Grid>
    </Grid>
  );
}

export default App;
