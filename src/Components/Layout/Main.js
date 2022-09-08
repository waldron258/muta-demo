import { Box } from "@mui/material/";

const Main = (props) => {
  const bodyStyles = {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#FAFAFA",
  };

  return (
    <Box component="main" sx={bodyStyles}>
      {props.children}
    </Box>
  );
};

export default Main;
