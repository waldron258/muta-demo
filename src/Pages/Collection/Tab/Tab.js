import { useState } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { classes } from "./Tab.styles";

const StyledTabs = styled(Tabs)(classes.styledTabs);

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => [
    {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.pxToRem(16),
      marginRight: theme.spacing(1),
    },
    classes.styledTab,
  ]
);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ width: "100%" }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const CustomTabs = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const notFound = (
    <Box sx={classes.noCollectionsFound}>
      <Typography
        id="not-found"
        sx={[
          classes.noCollectionsFoundFont,
          {
            fontWeight: "bold",
            fontSize: "32px",
            lineHeight: "48px",
          },
        ]}
      >
        Parece que aun no haz recogido algo.
      </Typography>
      <Typography
        id="not-found"
        sx={[
          classes.noCollectionsFoundFont,
          {
            fontWeight: "normal",
            fontSize: "24px",
            lineHeight: "35px",
          },
        ]}
      >
        Puedes registrar una recolección haciendo click en el boton de arriba.
      </Typography>
    </Box>
  );
  return (
    <Box sx={classes.container}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="Hoy" {...a11yProps(0)} />
        <StyledTab label="Todas" {...a11yProps(1)} />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        {props.collections.length > 0 ? props.table : notFound}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {notFound}
      </TabPanel>
    </Box>
  );
};

export default CustomTabs;
