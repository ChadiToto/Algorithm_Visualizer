import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      <div>
        <ToastContainer
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          limit={1}
          pauseOnFocusLoss
          draggable
        />
        <SortingVizualizer></SortingVizualizer>
      </div>
    </Grid>
  );
}

export default App;
