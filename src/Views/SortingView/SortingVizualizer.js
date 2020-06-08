import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Paper } from "@material-ui/core";

import "./SortingVizualizer.css";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#EDEFED",
    width: "100%",
    minHeight: 450,
    marginBottom: 30,
  },
});

const Vizualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < randomIntFromInterval(5, 12); i++) {
      arr.push(randomIntFromInterval(5, 400));
    }
    setArray(arr);
  };

  /*const SelectionSortAnimated = () => {
    let animations = selectionSort(array);
    let animationArray = [];
    for (let animation of animations) {
      animationArray.push(animation.comparaison);
      animationArray.push(animation.comparaison);
      animationArray.push(animation.swap);
    }
    console.log(animationArray);

    for (let i = 0; i < animationArray.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange && animationArray[i] !== undefined) {
        const [barOneIdx, barTwoIdx] = animationArray[i];
        const barOne = arrayBars[barOneIdx].style;
        const barTwo = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? "red" : "rebeccapurple";
        setTimeout(() => {
          barOne.backgroundColor = color;
          barTwo.backgroundColor = color;
        }, i * 300);
      } else if (animationArray[i] !== undefined) {
        // Swapping
        setTimeout(() => {
          let [barOneIdx, barTwoIdx] = animationArray[i];
          let barOne = arrayBars[barOneIdx].style;
          let barTwo = arrayBars[barTwoIdx].style;
          [barOne.height, barTwo.height] = [barTwo.height, barOne.height];
        }, i * 300);
      }
    }
  };

  const bubbleSortAnimated = () => {
    let animations = bubbleSort(array);
    let animationArray = [];

    for (let animation of animations) {
      animationArray.push(animation.comparaison);
      animationArray.push(animation.comparaison);
      animationArray.push(animation.swap);
    }
    for (let i = 0; i < animationArray.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animationArray[i];
        const barOne = arrayBars[barOneIdx].style;
        const barTwo = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? "red" : "rebeccapurple";
        setTimeout(() => {
          barOne.backgroundColor = color;
          barTwo.backgroundColor = color;
        }, i * 1);
      } else if (animationArray[i] !== undefined) {
        setTimeout(() => {
          let [barOneIdx, barTwoIdx] = animationArray[i];
          let barOne = arrayBars[barOneIdx].style;
          let barTwo = arrayBars[barTwoIdx].style;
          [barOne.height, barTwo.height] = [barTwo.height, barOne.height];
        }, i * 1);
      }
    }
  };*/

  const classes = useStyles();

  return (
    <Grid item direction="column" spacing={2} container>
      {/* Vizualizer Part */}
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Paper className={classes.container}>
            <Grid
              container
              className="array-container"
              style={{ transform: "rotate(180deg)" }}
            >
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  style={{ height: `${value}px` }}
                  key={idx}
                >
                  <div className="values">{value}</div>
                </div>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Player Part */}
      <Grid container>
        <Grid item xs={5} />
        <Grid item xs={2}>
          <Paper>qsdsdq</Paper>
        </Grid>
        <Grid item xs={5} />
      </Grid>
    </Grid>
  );
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Vizualizer;
