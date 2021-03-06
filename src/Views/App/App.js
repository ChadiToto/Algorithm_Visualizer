/* React */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* 3rd Party Components*/
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "fontsource-roboto";
import { Grid } from "@material-ui/core";

/* Custom Components*/
import Header from "../../Components/Header";
import Home from "../HomeView/Home";
import SortingVizualizer from "../SortingView/SortingVizualizer";
import FinderVizualizer from "../FinderView/FinderVizualizer";
import PuzzleVizualizer from "../PuzzleView/PuzzleVizualizer";
import QueenVizualizer from "../QueenView/QueenVizualizer";

function App() {
  return (
    <Router>
      <Grid container direction="column">
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
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Sorting">
              <SortingVizualizer />
            </Route>
            <Route exact path="/PathFinder">
              <FinderVizualizer />
            </Route>
            <Route exact path="/Puzzle">
              <PuzzleVizualizer />
            </Route>
            <Route exact path="/Queen">
              <QueenVizualizer />
            </Route>
          </Switch>
        </div>
      </Grid>
    </Router>
  );
}

export default App;
