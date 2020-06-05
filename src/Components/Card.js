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

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Box boxShadow={10}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.child.image}
            title="Sorting Algorithms"
          >
            <Box className={classes.content} color="white">
              <Typography className={classes.title}>
                {props.child.title}
              </Typography>
              <Typography className={classes.description}>
                {props.child.desc}
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
