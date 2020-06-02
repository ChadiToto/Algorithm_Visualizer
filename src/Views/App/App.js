import React from "react";
import "fontsource-roboto";
import { Grid } from "@material-ui/core";

import Header from "../../Components/Header";

function App() {
  return (
    <Grid container direction="column" spacing={10}>
      <Grid item xs={12}>
        <Header></Header>
      </Grid>

      <Grid item container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          qsdsqd
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
}

export default App;
