/* React Main Features */
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

/* Material UI Components */
import { Grid, Paper } from "@material-ui/core";

/* StyleSheets*/
import "./SortingVizualizer.css";

/* ALgorithms */
import bubbleSort from "./Algorithms/BubbleSort";
import selectionSort from "./Algorithms/SelectionSort";

/* Custom Components */
import Player from "../../Components/Player";

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

  const SelectionSortAnimated = () => {
    let animations = selectionSort(array);
    let animationArray = [];
    for (let animation of animations) {
      animationArray.push(animation.comparaison);
      animationArray.push(animation.comparaison);
      animationArray.push(animation.swap);
    }

    for (let i = 0; i < animationArray.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange && animationArray[i] !== undefined) {
        const [barOneIdx, barTwoIdx] = animationArray[i];
        const barOne = arrayBars[barOneIdx].style;
        const barTwo = arrayBars[barTwoIdx].style;

        const color = i % 3 === 0 ? "red" : "#bfdbf7";
        setTimeout(() => {
          barOne.backgroundColor = color;
          barTwo.backgroundColor = color;
        }, i * 200);
      } else if (animationArray[i] !== undefined) {
        // Swapping
        setTimeout(() => {
          let [barOneIdx, barTwoIdx] = animationArray[i];
          var barOne = arrayBars[barOneIdx].style;
          var barTwo = arrayBars[barTwoIdx].style;

          [
            document.getElementById(barOneIdx).innerHTML,
            document.getElementById(barTwoIdx).innerHTML,
          ] = [
            document.getElementById(barTwoIdx).innerHTML,
            document.getElementById(barOneIdx).innerHTML,
          ];

          [barOne.height, barTwo.height] = [barTwo.height, barOne.height];
        }, i * 200);
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

        const color = i % 3 === 0 ? "red" : "#bfdbf7";
        setTimeout(() => {
          barOne.backgroundColor = color;
          barTwo.backgroundColor = color;
        }, i * 200);
      } else if (animationArray[i] !== undefined) {
        setTimeout(() => {
          let [barOneIdx, barTwoIdx] = animationArray[i];
          let barOne = arrayBars[barOneIdx].style;
          let barTwo = arrayBars[barTwoIdx].style;
          [
            document.getElementById(barOneIdx).innerHTML,
            document.getElementById(barTwoIdx).innerHTML,
          ] = [
            document.getElementById(barTwoIdx).innerHTML,
            document.getElementById(barOneIdx).innerHTML,
          ];

          [barOne.height, barTwo.height] = [barTwo.height, barOne.height];
        }, i * 200);
      }
    }
  };

  const classes = useStyles();
  let sortMethods = [
    {
      title: "Selection Sort",
      method: SelectionSortAnimated,
    },
    {
      title: "Bubble Sort",
      method: bubbleSortAnimated,
    },
    {
      title: "Insertion Sort",
      method: bubbleSortAnimated,
    },
    {
      title: "Quick Sort",
      method: SelectionSortAnimated,
    },
    {
      title: "Merge Sort",
      method: SelectionSortAnimated,
    },
  ];

  return (
    <Grid item direction="column" container style={{ padding: 0 }}>
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
                  <div className="values" id={idx}>
                    {value}
                  </div>
                </div>
              ))}
            </Grid>
          </Paper>
        </Grid>
        {/*TODO TERMINAL*/}
      </Grid>

      {/* Player Part */}
      <Player sort={sortMethods} reset={resetArray}></Player>
    </Grid>
  );
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Vizualizer;
