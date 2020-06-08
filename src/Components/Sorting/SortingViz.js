import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
//import bubbleSort from "./SortAlgorithms/BubbleSort";
//import selectionSort from "./SortAlgorithms/SelectionSort";
import "./SortingVizualizer.css";
function SortingVizualizer() {
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

  return (
    <Grid
      container
      className="array-container"
      style={{ transform: "rotate(180deg)" }}
    >
      {array.map((value, idx) => (
        <div className="array-bar" style={{ height: `${value}px` }} key={idx}>
          <div className="values">{value}</div>
        </div>
      ))}
    </Grid>
  );
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVizualizer;
