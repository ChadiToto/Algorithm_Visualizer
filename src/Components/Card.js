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
  media: {
    display: "flex",
    minHeight: 190,
    width: "100%",
    backgroundSize: "cover",
  },
  content: {
    height: "100%",
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
    fontSize: 45,
    paddingBottom: 10,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Box boxShadow={10}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.child.image}
            title={props.child.title}
          >
            <Box className={classes.content} color="white">
              <Typography className={classes.title}>
                {props.child.title}
              </Typography>
              <Typography className={classes.description}>
                {props.child.desc}
              </Typography>
              <PlayCircleFilledIcon
                className={classes.play}
              ></PlayCircleFilledIcon>
            </Box>
          </CardMedia>
        </CardActionArea>
      </Card>
    </Box>
  );
}
