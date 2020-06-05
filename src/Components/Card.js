import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from "@material-ui/core";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 190,
    width: "100%",
    backgroundSize: "cover",
  },
  content: {
    marginLeft: 25,
    paddingTop: "4.5vh",
  },
  title: {
    fontFamily: "Comfortaa",
    fontSize: 30,
  },
  description: {
    paddingTop: "1.5vh",
    paddingRight: "6vw",
    fontSize: 15.7,
    fontFamily: "Montserrat",
  },
  play: {
    color: "white",
    float: "right",
    marginRight: 20,
    marginTop: 10,
    fontSize: 40,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Box boxShadow={10}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://image.freepik.com/free-photo/bright-colors-arrayed-gradient_23-2147734173.jpg"
            title="Sorting Algorithms"
          >
            <Box className={classes.content} color="white">
              <Typography className={classes.title}>Sorting</Typography>
              <Typography className={classes.description}>
                Vizualize multiple sorting algortihms that includes Bubble,
                Selection, Insertion and Merge Sort.
              </Typography>
            </Box>
            <PlayCircleFilledIcon
              className={classes.play}
            ></PlayCircleFilledIcon>
          </CardMedia>
        </CardActionArea>
      </Card>
    </Box>
  );
}
