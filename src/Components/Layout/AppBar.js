import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Tooltip,
  Avatar,
  IconButton,
} from "@mui/material";

import { classes } from "./AppBar.styles";

import { ReactComponent as MutaLogo } from "../../Assets/Logo/muta_logo.svg";

const navItems = ["Recolecciones", "Placeholder1", "Placeholder2"];

const CustomAppBar = () => {
  return (
    <AppBar component="nav" elevation={0} sx={classes.appBar}>
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Box sx={classes.logoContainer}>
            <MutaLogo />
          </Box>
        </Box>
        <Box sx={classes.navItemsContainer}>
          {navItems.map((item, key) => (
            <Button
              key={item}
              sx={[
                classes.navItem,
                {
                  color: key === 0 ? "#4c4c4c" : "#9e9e9e",
                  "&:hover": {
                    color: key !== 0 && "#4c4c4c",
                  },
                },
              ]}
            >
              {item}
            </Button>
          ))}
          <Tooltip title="Juan Pérez">
            <IconButton sx={classes.icon}>
              <Avatar sx={classes.icon} alt="Remy Sharp" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
