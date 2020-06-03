import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardMedia, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 230,
    width: "100%",
    backgroundSize: "100%",
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
            image="https://static.vecteezy.com/packs/media/components/home/masthead-vectors/img/lavakidneys_800x400@2x-2db5e5a0c944e2b16a11a18674570f76.jpg"
            title="Sorting Algorithms"
          ></CardMedia>
        </CardActionArea>
      </Card>
    </Box>
  );
}
