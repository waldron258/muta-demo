import { Box } from "@mui/material/";

import ResponsiveAppBar from "./AppBar";
import Main from "./Main";

import classes from "../../App.module.css";

const Layout = (props) => {
  return (
    <Box className={classes.root}>
      <ResponsiveAppBar />
      <Main children={props.children} />
    </Box>
  );
};

export default Layout;
