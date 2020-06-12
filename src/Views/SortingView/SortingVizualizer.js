/* React Main Features */
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

/* 3rd Party Components */
import { Grid, Paper } from "@material-ui/core";

/* StyleSheets*/
import "./SortingVizualizer.css";

/* ALgorithms */
import bubbleSort from "./Algorithms/BubbleSort";
import selectionSort from "./Algorithms/SelectionSort";
import insertionSort from "./Algorithms/InsertionSort";
import quickSort from "./Algorithms/QuickSort";
import mergeSort from "./Algorithms/MergeSort";

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

const SortingVizualizer = () => {
  const [array, setArray] = useState([]);
  const [oldArray, setOldArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  /**
   * Generates new array thats going to be displayed on Vizualizer
   */
  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < randomIntFromInterval(5, 12); i++) {
      arr.push(randomIntFromInterval(5, 400));
    }
    setArray(arr);
    setOldArray([...arr]);
  };

  /**
   * Undo any Sorting to the array and reverts it back
   */
  const undo = () => {
    setArray([]);
    // Refresh Effect
    setTimeout(() => {
      setArray([...oldArray]);
    }, 1);
  };

  /**
   * Displays sorting animation on the Vizualizer
   *
   * @param {function} fct The sorting function to be called from ./Algorithms
   */
  const setAnimations = (fct) => {
    let animations = fct(array).animations;
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
        }, i * 100);
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
        }, i * 100);
      }
    }
  };

  /**
   * Returns the time in ms that took to sort the array
   * using a certain algorithm
   *
   * @param {function} fct to be used for sorting
   * @returns {number} time in ms
   */
  const getTime = (fct) => {
    return fct(oldArray).time;
  };

  /**
   * Calls the setAnimations function to start the sorting
   * animation depending on the input of "algortihm".
   *
   * @param {number} algortihm The Algorithm to be animated
   * @todo Add mergeSort
   */
  const setSortingAlgo = (algortihm) => {
    switch (algortihm) {
      case 0: // Selection Sort
        setAnimations(selectionSort);
        break;
      case 1: // Bubble Sort
        setAnimations(bubbleSort);
        break;
      case 2: // Insertion Sort
        setAnimations(insertionSort);
        break;
      case 3:
        setAnimations(quickSort);
        break;
      case 4:
        setAnimations(mergeSort);
        break;
      default:
        console.error("Invalid Algorithm");
    }
  };

  const classes = useStyles();

  /**
   * Associate Every Algorithm with the setSorting function with
   * the appropriate "algorithm" parameter.
   *
   * This variable is passed to child components as props.
   * @type {array}
   */
  const sortMethods = [
    {
      title: "Selection Sort",
      method: () => setSortingAlgo(0),
    },
    {
      title: "Bubble Sort",
      method: () => setSortingAlgo(1),
    },
    {
      title: "Insertion Sort",
      method: () => setSortingAlgo(2),
    },
    {
      title: "Quick Sort",
      method: () => setSortingAlgo(3),
    },
    {
      title: "Merge Sort",
      method: () => setSortingAlgo(0),
    },
  ];

  /**
   * Associate Every Algorithm with the time it takes to sort
   * a 10K length array.
   *
   * This variable is passed to child components as props.
   * @type {object}
   */
  const timeMethods = {
    title: "Sorting this Array Took :",
    algorithms: [
      {
        title: "Selection Sort",
        time: getTime(selectionSort, array),
      },
      {
        title: "Bubble Sort",
        time: getTime(bubbleSort, array),
      },
      {
        title: "Insertion Sort",
        time: getTime(insertionSort, array),
      },
      {
        title: "Quick Sort",
        time: getTime(quickSort, array),
      },
      {
        title: "Merge Sort",
        time: getTime(mergeSort, array),
      },
    ],
  };

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
      </Grid>

      {/* Player Part */}
      <Player
        options={sortMethods}
        reset={resetArray}
        undo={undo}
        time={timeMethods}
      ></Player>
    </Grid>
  );
};

/**
 * Generates a random number between min and max values
 *
 * @param {number } min
 * @param {number} max
 * @returns {number}
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVizualizer;
