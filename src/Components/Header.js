import React from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="secondary"
      style={{
        boxShadow: "none",
        backgroundColor: "#022B3A",
      }}
    >
      <Toolbar variant="dense">
        <Typography>Algorithm Visualizer</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
